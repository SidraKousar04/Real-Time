import React, { useState } from 'react';
import API from '../services/api';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  
    e.preventDefault();
    try {
      await API.post('/contact', form);
      alert('Form submitted!');
      setForm({ name: '', email: '', mobile: '', city: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed!');
    }
  };

  return (
    <section
     className="bg-blue-900/90 text-white bg-cover bg-center rounded-2xl"
      id="contact"
      style={{
        backgroundImage: `url('/bg-contact.jpg')`,
      }}
    >
      <div className="max-w-[400px] mx-auto bg-transparent bg-opacity-90 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">For Information Contact us</h2>
        <form onSubmit={handleSubmit} className="bg-transparent rounded-lg shadow p-6 text-white space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
