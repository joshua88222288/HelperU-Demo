import type { Task } from '../types';

export const filterTasks = (tasks: Task[], query: string): Task[] => {
  const searchTerm = query.toLowerCase();
  return tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm) ||
    task.description.toLowerCase().includes(searchTerm) ||
    task.category.toLowerCase().includes(searchTerm)
  );
};