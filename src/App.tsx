import React, { useState, useMemo } from 'react';
import { Plus, CheckSquare } from 'lucide-react';
import TaskStats from './components/TaskStats';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task, TaskFilter as TaskFilterType, User } from './types';
import { mockUsers, mockTasks } from './data/mockData';
import { calculateTaskStats } from './utils/taskUtils';

function App() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [users] = useState<User[]>(mockUsers);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();
  const [filter, setFilter] = useState<TaskFilterType>({});

  // Calculate filtered tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      // Search filter
      if (filter.search) {
        const searchLower = filter.search.toLowerCase();
        if (!task.title.toLowerCase().includes(searchLower) && 
            !task.description.toLowerCase().includes(searchLower)) {
          return false;
        }
      }

      // Status filter
      if (filter.status && task.status !== filter.status) {
        return false;
      }

      // Priority filter
      if (filter.priority && task.priority !== filter.priority) {
        return false;
      }

      // User filter
      if (filter.assignedUser && task.assignedUser.id !== filter.assignedUser) {
        return false;
      }

      return true;
    });
  }, [tasks, filter]);

  // Calculate stats
  const stats = useMemo(() => calculateTaskStats(tasks), [tasks]);

  const handleCreateTask = () => {
    setEditingTask(undefined);
    setIsFormOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleDeleteTask = (taskId: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prev => prev.filter(task => task.id !== taskId));
    }
  };

  const handleStatusChange = (taskId: string, status: 'todo' | 'in-progress' | 'done') => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, status, updatedAt: new Date() }
        : task
    ));
  };

  const handleFormSubmit = (taskData: Task) => {
    if (editingTask) {
      // Update existing task
      setTasks(prev => prev.map(task => 
        task.id === taskData.id ? taskData : task
      ));
    } else {
      // Create new task
      setTasks(prev => [taskData, ...prev]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <CheckSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">TaskHub</h1>
                <p className="text-gray-600">Manage your tasks efficiently</p>
              </div>
            </div>
            <button
              onClick={handleCreateTask}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm"
            >
              <Plus className="w-5 h-5" />
              New Task
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <TaskStats stats={stats} />

        {/* Filters */}
        <TaskFilter
          filter={filter}
          users={users}
          onFilterChange={setFilter}
        />

        {/* Task List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Tasks ({filteredTasks.length})
            </h2>
          </div>
          <TaskList
            tasks={filteredTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onStatusChange={handleStatusChange}
          />
        </div>
      </main>

      {/* Task Form Modal */}
      <TaskForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        task={editingTask}
        users={users}
      />
    </div>
  );
}

export default App;