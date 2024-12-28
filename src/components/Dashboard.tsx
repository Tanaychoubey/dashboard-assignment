import React, { useEffect, useState } from 'react';
import { ActivityChart } from './ActivityChart.tsx';
import { User, ShoppingCart, DollarSign, Activity } from 'lucide-react';
import { StatCard } from './StatCard.tsx';
import { GoalItem } from './GoalItem.tsx';
import { api } from '../services/api.ts';
import { OrdersSection } from './OrdersSection.tsx';
import { FeedbackSection } from './FeedbackSection.tsx';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<{
    totalUsers: number;
    totalCategories: number;
    totalOrders: number;
    totalRevenue: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statsData = await api.fetchStats();
        setStats(statsData);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-12 h-12 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl">Failed to load dashboard data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<User className="w-6 h-6" />}
            label="Total Users"
            value={stats.totalUsers.toString()}
            bgColor="bg-blue-600"
          />
          <StatCard
            icon={<Activity className="w-6 h-6" />}
            label="Total Categories"
            value={stats.totalCategories.toString()}
            bgColor="bg-green-600"
          />
          <StatCard
            icon={<ShoppingCart className="w-6 h-6" />}
            label="Total Orders"
            value={stats.totalOrders.toString()}
            bgColor="bg-red-600"
          />
          <StatCard
            icon={<DollarSign className="w-6 h-6" />}
            label="Total Revenue"
            value={`$${(stats.totalRevenue / 1000).toFixed(1)}k`}
            bgColor="bg-purple-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Goals</h2>
            <div className="space-y-4">
              <GoalItem label="Progress Status" progress={75} />
              <GoalItem label="Metrics" progress={60} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <OrdersSection />
          <FeedbackSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

