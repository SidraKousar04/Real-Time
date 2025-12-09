import React, { useEffect, useState } from 'react';
import ClientCard from './ClientCard';
import API from '../services/api';

const ClientsSection = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get('/clients')
      .then(res => setClients(res.data))
      .catch(err => console.error('Error fetching clients:', err));
  }, []);

  return (
    <section id="clients" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 tracking-wide">
        Happy Clients
      </h2>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-hide px-2">
        <div className="flex gap-8">
          {clients.length > 0 ? (
            clients.map((client) => (
              <div key={client._id} className="inline-block">
                <ClientCard client={client} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No client testimonials available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
