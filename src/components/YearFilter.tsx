import React from 'react';
import { useProjectData } from '../context/ProjectDataContext';

const YearFilter: React.FC = () => {
  const { filterTimelineByYear } = useProjectData();
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filterTimelineByYear(e.target.value);
  };
  
  return (
    <div className="flex items-center">
      <span className="text-sm text-gray-600 mr-2">Filter by year:</span>
      <select 
        className="bg-white border border-gray-300 text-gray-700 py-1 px-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={handleFilterChange}
        defaultValue="all"
      >
        <option value="all">All Years</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
};

export default YearFilter;