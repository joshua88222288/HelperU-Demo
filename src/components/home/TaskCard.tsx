import React from 'react';
import { motion } from 'framer-motion';
import type { Task } from '../../types';

interface TaskCardProps {
  task: Task;
  onClick: (task: Task) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(task)}
      className="bg-white rounded-xl shadow-sm p-4 text-left w-full hover:shadow-md transition-shadow"
    >
      <div className="w-full aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
        <img
          src={task.imageUrl}
          alt={task.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-medium text-gray-900">{task.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{task.description}</p>
    </motion.button>
  );
};