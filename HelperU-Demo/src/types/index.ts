export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface LoadingScreenProps {
  message?: string;
}

export interface BottomBarProps {
  items: NavItem[];
  currentPath: string;
}

export interface Task {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  imageUrl: string;
  questions: QuestionPage[];
}

export interface QuestionPage {
  id: string;
  title: string;
  type: 'select' | 'multi-select' | 'text' | 'date' | 'time' | 'address' | 'number';
  options?: string[];
  placeholder?: string;
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
  };
  dependsOn?: {
    questionId: string;
    value: string;
  };
}

export interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

export interface TaskQuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
  onSubmit: (answers: Record<string, any>) => void;
}