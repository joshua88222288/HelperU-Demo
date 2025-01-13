import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import type { TaskQuestionsModalProps, QuestionPage } from '../types';

export const TaskQuestionsModal: React.FC<TaskQuestionsModalProps> = ({
  isOpen,
  onClose,
  task,
  onSubmit,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleNext = () => {
    if (currentPage < task.questions.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onSubmit(answers);
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const renderQuestion = (question: QuestionPage) => {
    switch (question.type) {
      case 'select':
        return (
          <select
            className="w-full p-3 border border-gray-200 rounded-lg"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
          >
            <option value="">Select an option</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'multi-select':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={answers[question.id]?.includes(option)}
                  onChange={(e) => {
                    const current = answers[question.id] || [];
                    if (e.target.checked) {
                      handleAnswer(question.id, [...current, option]);
                    } else {
                      handleAnswer(
                        question.id,
                        current.filter((item: string) => item !== option)
                      );
                    }
                  }}
                  className="h-4 w-4 text-blue-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );
      case 'text':
        return (
          <input
            type="text"
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder={question.placeholder}
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
          />
        );
      case 'date':
        return (
          <input
            type="date"
            className="w-full p-3 border border-gray-200 rounded-lg"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
          />
        );
      case 'time':
        return (
          <input
            type="time"
            className="w-full p-3 border border-gray-200 rounded-lg"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
          />
        );
      case 'address':
        return (
          <textarea
            className="w-full p-3 border border-gray-200 rounded-lg"
            placeholder="Enter address"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            rows={3}
          />
        );
      case 'number':
        return (
          <input
            type="number"
            className="w-full p-3 border border-gray-200 rounded-lg"
            min={question.validation?.min}
            max={question.validation?.max}
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl"
          >
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-sm text-gray-500">
                Step {currentPage + 1} of {task.questions.length}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                {task.questions[currentPage].title}
              </h2>
              {renderQuestion(task.questions[currentPage])}
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  currentPage === 0
                    ? 'text-gray-400 bg-gray-100'
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <span>{currentPage === task.questions.length - 1 ? 'Finish' : 'Next'}</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};