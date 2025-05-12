import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <button 
          className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span>Back</span>
        </button>
      </div>
    </header>
  );
};

export default Header;