import React from 'react';
import { GraduationCap, Info, ToggleRight } from 'lucide-react';
import type { SearchBarProps } from '../../types';

export const TopBar: React.FC<{
  onInfoClick: () => void;
  onTogglePortal: () => void;
  searchProps: SearchBarProps;
}> = ({ onInfoClick, onTogglePortal, searchProps }) => {
  return (
    <div className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button
            onClick={onInfoClick}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Info className="h-6 w-6 text-gray-600" />
          </button>

          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold text-blue-900">HelperU</span>
          </div>

          <button
            onClick={onTogglePortal}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ToggleRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="pb-4">
          <input
            type="search"
            placeholder="Search tasks..."
            className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => searchProps.onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};