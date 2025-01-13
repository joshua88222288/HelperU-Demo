import React from 'react';
import { motion } from 'framer-motion';
import { TaskCard } from './TaskCard';
import type { Task } from '../../types';

interface TaskGridProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

export const TaskGrid: React.FC<TaskGridProps> = ({ tasks, onTaskClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={onTaskClick}
          />
        ))}
      </div>
    </motion.div>
  );
};