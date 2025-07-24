import { Task, TaskStats } from '../types';

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

export const isOverdue = (task: Task): boolean => {
  if (task.status === 'done') return false;
  return new Date() > new Date(task.dueDate);
};

export const calculateTaskStats = (tasks: Task[]): TaskStats => {
  const stats: TaskStats = {
    total: tasks.length,
    todo: 0,
    inProgress: 0,
    done: 0,
    overdue: 0,
  };

  tasks.forEach(task => {
    switch (task.status) {
      case 'todo':
        stats.todo++;
        break;
      case 'in-progress':
        stats.inProgress++;
        break;
      case 'done':
        stats.done++;
        break;
    }
    
    if (isOverdue(task)) {
      stats.overdue++;
    }
  });

  return stats;
};

export const getPriorityColor = (priority: 'low' | 'medium' | 'high'): string => {
  switch (priority) {
    case 'low':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'high':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getStatusColor = (status: 'todo' | 'in-progress' | 'done'): string => {
  switch (status) {
    case 'todo':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'done':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};