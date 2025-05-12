import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  projectTimelineData, 
  completionRateData, 
  stagewiseData, 
  towerwiseData 
} from '../data/projectData';

export interface ProjectContextType {
  timelineData: any[];
  completionRate: any[];
  stagewiseData: any[];
  towerwiseData: any[];
  filterTimelineByYear: (year: string) => void;
  originalTimelineData: any[];
}

const ProjectDataContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [timelineData, setTimelineData] = useState(projectTimelineData);
  const [completionRate] = useState(completionRateData);
  const [stagewise] = useState(stagewiseData);
  const [towerwise] = useState(towerwiseData);

  const filterTimelineByYear = (year: string) => {
    if (year === 'all') {
      setTimelineData(projectTimelineData);
    } else {
      const filtered = projectTimelineData.filter(item => 
        item.date.includes(`'${year.substring(2)}`)
      );
      setTimelineData(filtered);
    }
  };

  return (
    <ProjectDataContext.Provider 
      value={{ 
        timelineData, 
        completionRate, 
        stagewiseData: stagewise, 
        towerwiseData: towerwise,
        filterTimelineByYear,
        originalTimelineData: projectTimelineData,
      }}
    >
      {children}
    </ProjectDataContext.Provider>
  );
};

export const useProjectData = (): ProjectContextType => {
  const context = useContext(ProjectDataContext);
  if (context === undefined) {
    throw new Error('useProjectData must be used within a ProjectDataProvider');
  }
  return context;
};