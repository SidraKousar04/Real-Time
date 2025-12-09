import Client from '../models/Client.js';

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching clients' });
  }
};

export const addClient = async (req, res) => {
  const { name, designation, description, image } = req.body;
  console.log("Incoming client:", req.body);

  if (!name || !designation || !description || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const client = new Client({ name, designation, description, image });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create client' });
  }
};
