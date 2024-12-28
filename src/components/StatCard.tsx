import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, label, value, bgColor }) => (
  <div className={`${bgColor} rounded-lg p-4`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-200">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="bg-white/20 p-2 rounded-lg">
        {icon}
      </div>
    </div>
  </div>
);