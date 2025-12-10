import React, { useState } from 'react';
import API from '../../services/api';

const ClientForm = () => {
  const [form, setForm] = useState({
    name: '',
    designation: '',
    description: '',
    image: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/clients', form);
      alert('Client added successfully!');
      setForm({ name: '', designation: '', description: '', image: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to add client');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Client</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Testimonial"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Client
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
