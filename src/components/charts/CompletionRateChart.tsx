import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { useProjectData } from '../../context/ProjectDataContext';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium text-gray-700">{label}</p>
        <p className="text-blue-600">
          <span className="font-medium">Planned:</span> {payload[0].value.toFixed(2)}%
        </p>
        <p className="text-red-500">
          <span className="font-medium">Actual:</span> {payload[1].value.toFixed(2)}%
        </p>
      </div>
    );
  }

  return null;
};

const CompletionRateChart: React.FC = () => {
  const { completionRate } = useProjectData();

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={completionRate}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={20}
          barSize={60}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis 
            domain={[0, 100]} 
            tickCount={5}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: '20px' }}
          />
          <Bar 
            dataKey="planned" 
            fill="#4A90E2" 
            name="Planned" 
            radius={[4, 4, 0, 0]}
          >
            <LabelList dataKey="planned" position="top" formatter={(value: number) => `${value.toFixed(2)}`} />
          </Bar>
          <Bar 
            dataKey="actual" 
            fill="#E27A5A" 
            name="Actual" 
            radius={[4, 4, 0, 0]}
          >
            <LabelList dataKey="actual" position="top" formatter={(value: number) => `${value.toFixed(2)}`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompletionRateChart;