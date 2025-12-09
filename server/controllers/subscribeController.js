import Subscriber from '../models/Subscriber.js';

export const addSubscriber = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Subscription failed', error });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ subscribedAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subscribers' });
  }
};
