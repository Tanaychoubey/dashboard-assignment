import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ActivityData } from '../types';
import { api } from '../services/api.ts';

export const ActivityChart: React.FC = () => {
    const [data, setData] = useState<ActivityData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const activityData = await api.fetchActivity();
                setData(activityData);
            } catch (err) {
                setError('Failed to fetch activity data');
            } finally {
                setLoading(false);
            }
        };

        fetchActivity();
    }, []);

    if (loading) return <div className="text-white">Loading activity data...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Activity</h2>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};