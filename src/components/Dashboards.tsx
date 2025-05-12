import React from 'react';
import ProgressHeader from './ProgressHeader';
import OverallProgressChart from './charts/OverallProgressChart';
import CompletionRateChart from './charts/CompletionRateChart';
import StageComparisonChart from './charts/StageComparisonChart';
import TowerComparisonChart from './charts/TowerComparisonChart';
import YearFilter from './YearFilter';
import { useProjectData } from '../context/ProjectDataContext';

const Dashboard: React.FC = () => {
  const { completionRate } = useProjectData();
  const plannedProgress = completionRate[0]?.planned || 0;
  const actualProgress = completionRate[0]?.actual || 0;
  
  return (
    <div className="container mx-auto px-4 py-6">
      <ProgressHeader 
        plannedProgress={plannedProgress} 
        actualProgress={actualProgress} 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-800">Overall project completion %</h2>
            <YearFilter />
          </div>
          <OverallProgressChart />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Completion Rate</h2>
          <CompletionRateChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Planned Vs Actual (Stagewise)</h2>
          <StageComparisonChart />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Planned Vs Actual (Towerwise)</h2>
          <TowerComparisonChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;