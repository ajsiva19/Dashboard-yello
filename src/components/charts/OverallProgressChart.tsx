import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useProjectData } from '../../context/ProjectDataContext';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium text-gray-700">{label}</p>
        <p className="text-blue-600">
          <span className="font-medium">Planned:</span> {payload[0].value}%
        </p>
        <p className="text-red-500">
          <span className="font-medium">Actual:</span> {payload[1].value}%
        </p>
      </div>
    );
  }

  return null;
};

const OverallProgressChart: React.FC = () => {
  const { timelineData } = useProjectData();

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={timelineData}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 10 }} 
            interval={timelineData.length > 15 ? Math.floor(timelineData.length / 10) : 0}
            tickMargin={10}
          />
          <YAxis 
            domain={[0, 100]} 
            tickCount={5}
            tick={{ fontSize: 10 }}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: '10px' }}
          />
          <Line
            type="monotone"
            dataKey="planned"
            stroke="#4A90E2"
            strokeWidth={2}
            dot={{ r: 2, strokeWidth: 2 }}
            activeDot={{ r: 5 }}
            name="Planned"
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#E27A5A"
            strokeWidth={2}
            dot={{ r: 2, strokeWidth: 2 }}
            activeDot={{ r: 5 }}
            name="Actual"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverallProgressChart;