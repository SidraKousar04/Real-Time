import React, { useState } from 'react';
import API from '../services/api';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post('/api/subscribe', { email });
      alert('Subscribed successfully!');
      setEmail('');
    } catch (err) {
      console.error(err);
      if (err.response?.status === 409) {
        alert('Already subscribed!');
      } else {
        alert('Failed to subscribe!');
      }
    }
  };

  return (
    <section id="newsletter" className="bg-blue-100 py-10 px-3 text-center flex items-center justify-center gap-8">
      <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Stay updated with placement opportunities, new features, and career tips from Flipr.
        </p>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="flex justify-center items-center gap-4 flex-wrap"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 w-[280px] shadow-sm focus:outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterForm;
