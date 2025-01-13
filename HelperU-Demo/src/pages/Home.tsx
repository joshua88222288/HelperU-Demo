import React, { useState } from 'react';
import { TaskGrid } from '../components/home/TaskGrid';
import { TaskQuestionsModal } from '../components/TaskQuestionsModal';
import { tasks } from '../data/tasks';
import { filterTasks } from '../utils/taskFilters';
import type { Task } from '../types';

interface HomeProps {
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const filteredTasks = filterTasks(tasks, searchQuery);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleTaskSubmit = (answers: Record<string, any>) => {
    console.log('Task answers:', answers);
    // Handle submission logic here
    setSelectedTask(null); // Close modal after submission
  };

  return (
    <div className="py-6">
      <TaskGrid tasks={filteredTasks} onTaskClick={handleTaskClick} />
      
      {selectedTask && (
        <TaskQuestionsModal
          isOpen={true}
          onClose={() => setSelectedTask(null)}
          task={selectedTask}
          onSubmit={handleTaskSubmit}
        />
      )}
    </div>
  );
};

export default Home;