import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';
import type { InfoModalProps } from '../types';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 text-left flex justify-between items-center"
      >
        <span className="font-medium">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-500"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
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
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold">About HelperU</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="divide-y divide-gray-200">
              <AccordionItem title="About HelperU">
                <p className="text-gray-600 leading-relaxed">
                  HelperU connects you with trusted, talented college students for personalized services. From tutoring and babysitting to tech support and sports coaching, HelperU offers an ultra-customized experience by letting you select taskers based on skills, language, and shared interests.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our mission is to empower college students with flexible job opportunities while providing you with reliable, relatable help. With services tailored to your needs and a network of diverse college talent, HelperU makes getting things done simple and stress-free.
                </p>
              </AccordionItem>

              <AccordionItem title="How to use HelperU">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Get Started</h3>
                      <p className="text-gray-600 mt-1">Browse through tasks or search for specific services using the search bar.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Find Your Perfect Helper</h3>
                      <p className="text-gray-600 mt-1">Answer quick questions to match with the right helper based on your needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Book and Relax</h3>
                      <p className="text-gray-600 mt-1">Schedule your task and communicate with your helper through the app.</p>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Services">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Personalized College Tours',
                    'Sports Coaching',
                    'Admissions Advice',
                    'Babysitting',
                    'Pet Sitting',
                    'House Sitting',
                    'Moving Help',
                    'Tutoring',
                    'Tech Support',
                    'Music Lessons',
                    'Project Work',
                    'Custom Tasks'
                  ].map((service) => (
                    <div
                      key={service}
                      className="p-3 bg-gray-50 rounded-lg text-sm"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem title="FAQs">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">How are helpers verified?</h3>
                    <p className="text-gray-600 mt-1">All helpers undergo background checks and must verify their college enrollment.</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Is my payment secure?</h3>
                    <p className="text-gray-600 mt-1">Yes, all payments are processed securely through our platform.</p>
                  </div>
                </div>
              </AccordionItem>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};