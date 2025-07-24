import React from 'react';
import { Search, Filter } from 'lucide-react';
import { TaskFilter as TaskFilterType, User } from '../types';

interface TaskFilterProps {
  filter: TaskFilterType;
  users: User[];
  onFilterChange: (filter: TaskFilterType) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, users, onFilterChange }) => {
  const handleFilterChange = (key: keyof TaskFilterType, value: string) => {
    onFilterChange({
      ...filter,
      [key]: value === 'all' ? undefined : value
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={filter.search || ''}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* Status Filter */}
        <select
          value={filter.status || 'all'}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
        >
          <option value="all">All Status</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {/* Priority Filter */}
        <select
          value={filter.priority || 'all'}
          onChange={(e) => handleFilterChange('priority', e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
        >
          <option value="all">All Priority</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>

        {/* User Filter */}
        <select
          value={filter.assignedUser || 'all'}
          onChange={(e) => handleFilterChange('assignedUser', e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
        >
          <option value="all">All Users</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;