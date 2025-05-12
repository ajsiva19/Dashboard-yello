import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Search, Filter } from 'lucide-react';
import { useProjects } from '@/context/ProjectsContext';

const Dashboard: React.FC = () => {
  const { projects } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 ">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Projects Dashboard</h1>
        
        <div className="flex items-center space-x-3">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
            <Filter size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;