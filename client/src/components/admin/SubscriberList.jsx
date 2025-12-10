import React, { useEffect, useState } from 'react';
import API from '../../services/api';

const SubscriberList = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    API.get('/api/subscribe')
      .then((res) => {
        console.log('Fetched subscribers:', res.data); // ✅ debug
        setSubscribers(res.data);
      })
      .catch((err) => {
        console.error('Error fetching subscribers:', err);
        alert('Failed to load subscriber data');
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Newsletter Subscribers</h2>
      {subscribers.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">#</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Subscribed At</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub, index) => (
                <tr key={sub._id} className="hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{sub.email}</td>
                  <td className="p-3 border">
                    {new Date(sub.subscribedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubscriberList;
