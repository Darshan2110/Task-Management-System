import React, { useState, useEffect } from 'react';
import { X, Save, Calendar, User, Flag, FileText } from 'lucide-react';
import { Task, User as UserType } from '../types';
import { generateId } from '../utils/taskUtils';

interface TaskFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
  task?: Task;
  users: UserType[];
}

const TaskForm: React.FC<TaskFormProps> = ({ isOpen, onClose, onSubmit, task, users }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedUserId: '',
    status: 'todo' as 'todo' | 'in-progress' | 'done',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: ''
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        assignedUserId: task.assignedUser.id,
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate.toISOString().split('T')[0]
      });
    } else {
      setFormData({
        title: '',
        description: '',
        assignedUserId: users[0]?.id || '',
        status: 'todo',
        priority: 'medium',
        dueDate: new Date().toISOString().split('T')[0]
      });
    }
  }, [task, users, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const assignedUser = users.find(u => u.id === formData.assignedUserId);
    if (!assignedUser) return;

    const taskData: Task = {
      id: task?.id || generateId(),
      title: formData.title,
      description: formData.description,
      assignedUser,
      status: formData.status,
      priority: formData.priority,
      createdAt: task?.createdAt || new Date(),
      updatedAt: new Date(),
      dueDate: new Date(formData.dueDate)
    };

    onSubmit(taskData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">
            {task ? 'Edit Task' : 'Create New Task'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4" />
              Task Title
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              placeholder="Enter task title..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
              placeholder="Describe the task details..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Assigned User */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                Assign to
              </label>
              <select
                required
                value={formData.assignedUserId}
                onChange={(e) => handleInputChange('assignedUserId', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              >
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4" />
                Due Date
              </label>
              <input
                type="date"
                required
                value={formData.dueDate}
                onChange={(e) => handleInputChange('dueDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Priority */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Flag className="w-4 h-4" />
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => handleInputChange('priority', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {task ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;