import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import type { LoadingScreenProps } from '../types';

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GraduationCap className="h-16 w-16 text-blue-600" />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-2xl font-bold text-blue-900"
      >
        HelperU
      </motion.h1>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-4 flex space-x-2"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-blue-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};