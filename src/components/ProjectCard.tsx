import React from 'react';
import { Project } from '../types';
import { Map, Image, Target, Video } from 'lucide-react';
import { formatDate } from '../utils/formatters';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title}
          className="w-full h-36 object-cover rounded-t-lg" 
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
          {project.type}
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-gray-800">{project.title}</h3>
          <p className="text-sm text-gray-500">Orders: {project.orders}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Order #:</span>
            <span className="text-xs font-medium">{project.orderId}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Last Order:</span>
            <span className="text-xs font-medium">{formatDate(project.lastOrderDate)}</span>
          </div>
        </div>
        
        <div className="pt-2 border-t border-gray-100">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1">
              <Map size={14} className="text-gray-600" />
              <span className="text-xs font-medium">{project.stats.maps}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image size={14} className="text-gray-600" />
              <span className="text-xs font-medium">{project.stats.images}</span>
            </div>
            <div className="flex items-center gap-1">
              <Target size={14} className="text-gray-600" />
              <span className="text-xs font-medium">{project.stats.points}</span>
            </div>
            {project.stats.virtualTours !== undefined && (
              <div className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                  <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs font-medium">{project.stats.virtualTours}</span>
              </div>
            )}
            {project.stats.videos !== undefined && (
              <div className="flex items-center gap-1">
                <Video size={14} className="text-gray-600" />
                <span className="text-xs font-medium">{project.stats.videos}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;