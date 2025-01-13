import type { Task } from '../../types';

export const serviceTasks: Task[] = [
  {
    id: 'errands',
    title: 'Running Errands',
    description: 'Help with various errands and tasks',
    category: 'Services',
    icon: 'shopping-bag',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'errand_type',
        title: 'What type of errands do you need help with?',
        type: 'multi-select',
        options: [
          'Grocery shopping',
          'Post office',
          'Pharmacy',
          'Dry cleaning',
          'Bank visits',
          'Pet supplies',
          'Package delivery',
          'Food runs',
          'Document services',
          'Gift shopping',
          'Returns'
        ]
      },
      {
        id: 'deadline',
        title: 'When do these errands need to be completed?',
        type: 'date'
      },
      {
        id: 'locations',
        title: 'List the locations for pickups/dropoffs',
        type: 'text',
        placeholder: 'Enter addresses or location names'
      }
    ]
  },
  {
    id: 'project-work',
    title: 'Project Work',
    description: 'Get help with various projects',
    category: 'Services',
    icon: 'briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'project_type',
        title: 'What type of project do you need help with?',
        type: 'select',
        options: [
          'Graphic Design',
          'Web Development',
          'Writing',
          'Video Editing',
          'Photography',
          'Research',
          'Data Analysis',
          'Marketing'
        ]
      },
      {
        id: 'skill_level',
        title: 'What is your current skill level in this area?',
        type: 'select',
        options: ['Beginner', 'Intermediate', 'Advanced']
      },
      {
        id: 'timeline',
        title: 'What is your project timeline?',
        type: 'text',
        placeholder: 'Enter your desired completion timeframe'
      },
      {
        id: 'has_materials',
        title: 'Do you have all necessary materials/software?',
        type: 'select',
        options: ['Yes', 'No']
      }
    ]
  }
];