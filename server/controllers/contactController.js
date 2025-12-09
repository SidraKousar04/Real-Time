import Contact from '../models/Contact.js';

export const submitContactForm = async (req, res) => {
  const { name, email, mobile, city } = req.body;

  if (!name || !email || !mobile || !city) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const contact = new Contact({ name, email, mobile, city });
    await contact.save();
    res.status(201).json({ message: 'Contact saved' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save contact', error });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
};
