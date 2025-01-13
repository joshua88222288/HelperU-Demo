import type { Task } from '../../types';

export const careTasks: Task[] = [
  {
    id: 'babysitting',
    title: 'Babysitting',
    description: 'Reliable childcare from experienced sitters',
    category: 'Care',
    icon: 'baby',
    imageUrl: 'https://images.unsplash.com/photo-1602006655394-e7a10c1cb47b?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'num_children',
        title: 'How many children need care?',
        type: 'select',
        options: ['1', '2', '3', '4', '5', '6', '7+']
      },
      {
        id: 'ages',
        title: 'What are the ages of the children?',
        type: 'multi-select',
        options: ['1-3 years old', '4-6 years old', '7+ years old']
      },
      {
        id: 'requirements',
        title: 'Do you have any special requirements?',
        type: 'text',
        placeholder: 'Enter any allergies, specific routines, etc.'
      },
      {
        id: 'date',
        title: 'What date do you need the sitter?',
        type: 'date'
      },
      {
        id: 'time',
        title: 'What time do you need the sitter?',
        type: 'time'
      },
      {
        id: 'address',
        title: 'What is the address where this will take place?',
        type: 'address'
      }
    ]
  },
  {
    id: 'pet-sitting',
    title: 'Pet Sitting',
    description: 'Loving care for your furry friends',
    category: 'Care',
    icon: 'paw',
    imageUrl: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'pet_type',
        title: 'What kind of pets need care?',
        type: 'multi-select',
        options: [
          'Dogs',
          'Cats',
          'Birds',
          'Rabbits',
          'Hamsters',
          'Guinea Pigs',
          'Fish',
          'Turtles',
          'Lizards',
          'Snakes'
        ]
      },
      {
        id: 'special_needs',
        title: 'Are there any special needs?',
        type: 'text',
        placeholder: 'Enter any medications, specific handling requirements, etc.'
      },
      {
        id: 'overnight',
        title: 'Do you need overnight care?',
        type: 'select',
        options: ['Yes', 'No']
      },
      {
        id: 'address',
        title: 'What is the address where this will take place?',
        type: 'address'
      }
    ]
  },
  {
    id: 'house-sitting',
    title: 'House Sitting',
    description: 'Reliable house sitting services',
    category: 'Care',
    icon: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'duration',
        title: 'How long do you need house-sitting services for?',
        type: 'select',
        options: [
          'A few hours',
          'Overnight',
          'One day',
          'A weekend',
          '3-5 days',
          'One week',
          '10-14 days',
          'Two weeks',
          'A month',
          'Long-term (more than a month)'
        ]
      },
      {
        id: 'tasks',
        title: 'What tasks need to be performed?',
        type: 'multi-select',
        options: [
          'Watering plants',
          'Collecting mail',
          'Taking out trash',
          'Feeding pets',
          'Walking pets',
          'Cleaning',
          'Security monitoring',
          'Light maintenance'
        ]
      },
      {
        id: 'address',
        title: 'What is the address where this will take place?',
        type: 'address'
      }
    ]
  }
];