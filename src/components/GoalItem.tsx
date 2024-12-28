import React from 'react';

interface GoalItemProps {
  label: string;
  progress: number;
}

export const GoalItem: React.FC<GoalItemProps> = ({ label, progress }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span>{label}</span>
      <span>{progress}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);