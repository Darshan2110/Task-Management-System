import React from 'react';
import { Calendar, Clock, Edit, Trash2, User } from 'lucide-react';
import { Task } from '../types';
import { formatDate, isOverdue, getPriorityColor, getStatusColor } from '../utils/taskUtils';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onStatusChange: (taskId: string, status: 'todo' | 'in-progress' | 'done') => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onStatusChange }) => {
  const overdue = isOverdue(task);

  return (
    <div className={`bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${
      overdue ? 'border-red-200 bg-red-50/30' : 'border-gray-100'
    }`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {task.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {task.description}
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => onEdit(task)}
              className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getPriorityColor(task.priority)}`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
          </span>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${getStatusColor(task.status)}`}>
            {task.status === 'in-progress' ? 'In Progress' : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
          {overdue && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-red-100 text-red-800 border border-red-200">
              <Clock className="w-3 h-3 mr-1" />
              Overdue
            </span>
          )}
        </div>

        {/* Assigned User */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Assigned to:</span>
          </div>
          <div className="flex items-center gap-2">
            {task.assignedUser.avatar && (
              <img
                src={task.assignedUser.avatar}
                alt={task.assignedUser.name}
                className="w-6 h-6 rounded-full object-cover"
              />
            )}
            <span className="text-sm font-medium text-gray-900">
              {task.assignedUser.name}
            </span>
          </div>
        </div>

        {/* Due Date */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">Due:</span>
          <span className={`text-sm font-medium ${overdue ? 'text-red-600' : 'text-gray-900'}`}>
            {formatDate(task.dueDate)}
          </span>
        </div>

        {/* Status Change Buttons */}
        <div className="flex gap-2">
          {task.status !== 'todo' && (
            <button
              onClick={() => onStatusChange(task.id, 'todo')}
              className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              To Do
            </button>
          )}
          {task.status !== 'in-progress' && (
            <button
              onClick={() => onStatusChange(task.id, 'in-progress')}
              className="flex-1 px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            >
              In Progress
            </button>
          )}
          {task.status !== 'done' && (
            <button
              onClick={() => onStatusChange(task.id, 'done')}
              className="flex-1 px-3 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;