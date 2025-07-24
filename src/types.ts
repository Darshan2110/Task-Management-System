export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedUser: User;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date;
}

export interface TaskFilter {
  status?: 'todo' | 'in-progress' | 'done' | 'all';
  priority?: 'low' | 'medium' | 'high' | 'all';
  assignedUser?: string | 'all';
  search?: string;
}

export interface TaskStats {
  total: number;
  todo: number;
  inProgress: number;
  done: number;
  overdue: number;
}