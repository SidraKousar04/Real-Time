import React, { useEffect, useState } from 'react';
import API from '../../services/api';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

 useEffect(() => {
  API.get('/api/contact')
    .then((res) => {
      console.log('Fetched contacts:', res.data); // 👈 log it
      setContacts(res.data);
    })
    .catch((err) => {
      console.error('Error fetching contacts:', err);
      alert('Failed to load contact data');
    });
}, []);


  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Submissions</h2>
      {contacts.length === 0 ? (
        <p>No contact form submissions yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">#</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Mobile</th>
                <th className="p-3 border">City</th>
                <th className="p-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{contact.name}</td>
                  <td className="p-3 border">{contact.email}</td>
                  <td className="p-3 border">{contact.mobile}</td>
                  <td className="p-3 border">{contact.city}</td>
                  <td className="p-3 border">
                    {new Date(contact.createdAt).toLocaleString()}
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

export default ContactList;

