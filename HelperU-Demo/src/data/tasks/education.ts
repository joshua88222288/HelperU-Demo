import type { Task } from '../../types';

export const educationTasks: Task[] = [
  {
    id: 'college-tours',
    title: 'College Tours',
    description: 'Get personalized campus tours from current students',
    category: 'Education',
    icon: 'school',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'college',
        title: 'Which college(s) are you interested in?',
        type: 'text',
        placeholder: 'Enter college name',
        validation: { required: true }
      },
      {
        id: 'interests',
        title: 'What are your academic and extracurricular interests?',
        type: 'multi-select',
        options: [
          'Computer Science',
          'Engineering',
          'Business',
          'Arts',
          'Sciences',
          'Sports',
          'Music',
          'Theater',
          'Student Organizations'
        ]
      },
      {
        id: 'areas',
        title: 'What particular areas would you like to focus on?',
        type: 'multi-select',
        options: [
          'Dorms',
          'Libraries',
          'Labs',
          'Sports Facilities',
          'Student Center',
          'Dining Halls',
          'Greek Life',
          'Study Areas'
        ]
      },
      {
        id: 'tour_date',
        title: 'What date would you like to tour?',
        type: 'date'
      },
      {
        id: 'tour_time',
        title: 'What time would you like to tour?',
        type: 'time'
      }
    ]
  },
  {
    id: 'tutoring',
    title: 'Tutoring',
    description: 'Academic help from top students',
    category: 'Education',
    icon: 'book',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'subject',
        title: 'What subject do you need help with?',
        type: 'select',
        options: [
          'Mathematics',
          'Physics',
          'Chemistry',
          'Biology',
          'Computer Science',
          'English',
          'History',
          'Foreign Languages',
          'Economics',
          'Business'
        ]
      },
      {
        id: 'frequency',
        title: 'How frequently do you need tutoring?',
        type: 'select',
        options: ['Bi-weekly', 'Weekly', 'Monthly', 'As needed']
      },
      {
        id: 'location_type',
        title: 'Do you prefer in-person or virtual tutoring?',
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