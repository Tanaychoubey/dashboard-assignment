import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Feedback } from '../types';
import { api } from '../services/api.ts';

export const FeedbackSection: React.FC = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackData = await api.fetchFeedback();
        setFeedback(feedbackData);
      } catch (err) {
        setError('Failed to fetch feedback');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading) return <div className="text-white">Loading feedback...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-white">Customer's Feedback</h2>
      <div className="space-y-4">
        {feedback.map((item) => (
          <div key={item.id} className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-white">{item.customer}</span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-300 text-sm">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};