import React, { useEffect, useState } from 'react';
import { Order } from '../types';
import { api } from '../services/api.ts';

export const OrdersSection: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await api.fetchOrders();
        setOrders(ordersData);
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="text-white">Loading orders...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-white">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-300">
              <th className="p-2">Customer</th>
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-gray-200">
                <td className="p-2">{order.customer}</td>
                <td className="p-2">{order.date}</td>
                <td className="p-2">${order.amount.toFixed(2)}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${order.status === 'approved' ? 'bg-green-500' :
                    order.status === 'pending' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};