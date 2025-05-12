import React from 'react';

interface ProgressHeaderProps {
  plannedProgress: number;
  actualProgress: number;
}

const ProgressHeader: React.FC<ProgressHeaderProps> = ({ plannedProgress, actualProgress }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Overall project completion %</h1>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-600 mb-1">Planned progress</div>
          <div className="bg-blue-600 text-white font-medium px-4 py-1 rounded-full text-center min-w-[90px]">
            {plannedProgress.toFixed(2)} %
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-600 mb-1">Actual progress</div>
          <div className="bg-red-500 text-white font-medium px-4 py-1 rounded-full text-center min-w-[90px]">
            {actualProgress.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressHeader;