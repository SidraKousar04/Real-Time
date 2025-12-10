import React from 'react';
const ClientCard = ({ client }) => {
  return (
    <div className="w-72 bg-[#f8fafc] flex-shrink-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-200">
      
      {/* Circular Image */}
      <img
        src={client.image}
        alt={client.name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow"
      />

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900">
        {client.name}
      </h3>

      {/* Designation */}
      <p className="text-sm text-gray-500 mb-3">{client.designation}</p>

      {/* Testimonial */}
      <p className="text-gray-700 text-sm italic leading-relaxed">
        {client.description}
      </p>
    </div>
  );
};

export default ClientCard;
