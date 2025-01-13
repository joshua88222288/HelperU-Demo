import { educationTasks } from './education';
import { fitnessTasks } from './fitness';
import { careTasks } from './care';
import { serviceTasks } from './services';
import { techTasks } from './tech';
import type { Task } from '../../types';

export const tasks: Task[] = [
  ...educationTasks,
  ...fitnessTasks,
  ...careTasks,
  ...serviceTasks,
  ...techTasks
];