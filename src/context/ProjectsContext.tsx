import React, { createContext, useContext, ReactNode } from 'react';
import { Project } from '../types';
import { projectsData } from '../data/projects';

interface ProjectsContextType {
  projects: Project[];
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const useProjects = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  return (
    <ProjectsContext.Provider value={{ projects: projectsData }}>
      {children}
    </ProjectsContext.Provider>
  );
};