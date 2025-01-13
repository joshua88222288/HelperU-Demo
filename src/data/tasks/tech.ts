import type { Task } from '../../types';

export const techTasks: Task[] = [
  {
    id: 'tech-support',
    title: 'Tech Support',
    description: 'Tech help from computer science students',
    category: 'Technology',
    icon: 'laptop',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'device_type',
        title: 'What device or software do you need help with?',
        type: 'select',
        options: [
          'Smartphone',
          'Laptop',
          'Desktop',
          'Tablet',
          'Printer',
          'Smart TV',
          'Wi-Fi Router',
          'Gaming Console',
          'Smart Home Devices'
        ]
      },
      {
        id: 'support_type',
        title: 'Do you need ongoing support or a one-time fix?',
        type: 'select',
        options: ['One-time fix', 'Ongoing support']
      },
      {
        id: 'location_type',
        title: 'Do you prefer in-person or virtual assistance?',
        type: 'select',
        options: ['In-person', 'Virtual']
      },
      {
        id: 'address',
        title: 'What is the address where this will take place?',
        type: 'address',
        dependsOn: {
          questionId: 'location_type',
          value: 'In-person'
        }
      }
    ]
  }
];