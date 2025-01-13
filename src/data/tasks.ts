import { Task } from '../types';

export const tasks: Task[] = [
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
        title: 'Any particular areas you want to focus on?',
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
    id: 'sports-coaching',
    title: 'Sports Coaching',
    description: 'One-on-one training with student athletes',
    category: 'Fitness',
    icon: 'dumbbell',
    imageUrl: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1000',
    questions: [
      {
        id: 'sport',
        title: 'What sport are you looking to get coached in?',
        type: 'select',
        options: [
          'Badminton',
          'Baseball',
          'Basketball',
          'Cheerleading',
          'Cross Country',
          'Field Hockey',
          'Football',
          'Golf',
          'Gymnastics',
          'Hockey',
          'Lacrosse',
          'Martial Arts',
          'Rugby',
          'Soccer',
          'Softball',
          'Swimming',
          'Tennis',
          'Track and Field',
          'Volleyball',
          'Wrestling'
        ]
      },
      {
        id: 'skill_level',
        title: 'What is your current skill level?',
        type: 'select',
        options: ['Beginner', 'Intermediate', 'Advanced']
      },
      {
        id: 'location_type',
        title: 'Do you have a location preference?',
        type: 'select',
        options: ['I have a location', 'I need a helper with access to a location']
      },
      {
        id: 'address',
        title: 'What is the address where you would like to train?',
        type: 'address',
        dependsOn: {
          questionId: 'location_type',
          value: 'I have a location'
        }
      }
    ]
  }
];