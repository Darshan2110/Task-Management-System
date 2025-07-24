import { User, Task } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '3',
    name: 'Carol Williams',
    email: 'carol@example.com',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@example.com',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design System Architecture',
    description: 'Create a comprehensive design system for the new application including components, colors, and typography guidelines.',
    assignedUser: mockUsers[0],
    status: 'in-progress',
    priority: 'high',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-16'),
    dueDate: new Date('2024-02-01')
  },
  {
    id: '2',
    title: 'Implement User Authentication',
    description: 'Build secure authentication system with login, registration, and password reset functionality.',
    assignedUser: mockUsers[1],
    status: 'todo',
    priority: 'high',
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-14'),
    dueDate: new Date('2024-01-25')
  },
  {
    id: '3',
    title: 'Database Schema Design',
    description: 'Design and implement the database schema for user data, tasks, and relationships.',
    assignedUser: mockUsers[2],
    status: 'done',
    priority: 'medium',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-18'),
    dueDate: new Date('2024-01-20')
  },
  {
    id: '4',
    title: 'Write API Documentation',
    description: 'Create comprehensive API documentation for all endpoints with examples and response formats.',
    assignedUser: mockUsers[3],
    status: 'todo',
    priority: 'low',
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
    dueDate: new Date('2024-02-10')
  },
  {
    id: '5',
    title: 'Setup CI/CD Pipeline',
    description: 'Configure automated testing, building, and deployment pipeline for the application.',
    assignedUser: mockUsers[1],
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-17'),
    dueDate: new Date('2024-01-22')
  },
  {
    id: '6',
    title: 'Mobile Responsive Design',
    description: 'Ensure all components are fully responsive and work seamlessly across all device sizes.',
    assignedUser: mockUsers[0],
    status: 'todo',
    priority: 'medium',
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16'),
    dueDate: new Date('2024-02-05')
  }
];