import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import ProjectCard from './ProjectCard';
import MapComponent from './Map';

const AllProjects: React.FC = () => {
  const { projects } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'grid' | 'map'>('grid');

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
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
          
          <button 
            onClick={() => setView(view === 'grid' ? 'map' : 'grid')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {view === 'grid' ? 'View Map' : 'View Grid'}
          </button>
          
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
            <Filter size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      {view === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-12rem)]">
          <MapComponent />
        </div>
      )}
    </div>
  );
};

export default AllProjects;