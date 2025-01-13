import React from 'react';
import { Home, Briefcase, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Jobs', href: '/jobs', icon: Briefcase },
  { label: 'Chat', href: '/chat', icon: MessageCircle },
  { label: 'Profile', href: '/profile', icon: User },
];

export const BottomBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navigationItems.map(({ label, href, icon: Icon }) => {
            const isActive = location.pathname === href;
            
            return (
              <Link
                key={href}
                to={href}
                className={`flex flex-col items-center space-y-1 ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};