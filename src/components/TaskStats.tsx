import React from 'react';
import { CheckCircle, Clock, AlertTriangle, ListTodo } from 'lucide-react';
import { TaskStats as TaskStatsType } from '../types';

interface TaskStatsProps {
  stats: TaskStatsType;
}

const TaskStats: React.FC<TaskStatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Tasks',
      value: stats.total,
      icon: ListTodo,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-600'
    },
    {
      label: 'To Do',
      value: stats.todo,
      icon: Clock,
      color: 'bg-gray-500',
      textColor: 'text-gray-600'
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      icon: Clock,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      label: 'Completed',
      value: stats.done,
      icon: CheckCircle,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      label: 'Overdue',
      value: stats.overdue,
      icon: AlertTriangle,
      color: 'bg-red-500',
      textColor: 'text-red-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {statItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.label}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{item.label}</p>
                <p className={`text-2xl font-bold ${item.textColor}`}>{item.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${item.color}`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStats;