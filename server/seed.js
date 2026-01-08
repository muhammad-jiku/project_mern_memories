import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import PostMessage from './models/postMessage.js';
import User from './models/user.js';

dotenv.config();

const CONNECTION_URL =
  process.env.MONGODB_URI ||
  'mongodb+srv://js_mastery:M6WfDnJEoj9HkV2d@practice.jto9p.mongodb.net/memories_app?retryWrites=true&w=majority';

// Sample users data
const usersData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
  },
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password123',
  },
  {
    name: 'Bob Wilson',
    email: 'bob@example.com',
    password: 'password123',
  },
  {
    name: 'Sarah Davis',
    email: 'sarah@example.com',
    password: 'password123',
  },
];

// Sample posts data
const postsData = [
  {
    title: 'My First Trip to Paris',
    message:
      'Had an amazing time exploring the Eiffel Tower and tasting delicious French cuisine. The city of lights truly lives up to its name!',
    tags: ['travel', 'paris', 'vacation', 'france'],
    selectedFile:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    likes: [],
    comments: ['What an amazing view!', 'I want to visit Paris too!'],
  },
  {
    title: 'Beach Sunset in Bali',
    message:
      'Watching the sunset at Kuta Beach was breathtaking. Bali is truly a paradise on earth.',
    tags: ['travel', 'bali', 'sunset', 'beach'],
    selectedFile:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    likes: [],
    comments: ['Beautiful shot!', 'Bali is on my bucket list'],
  },
  {
    title: 'Hiking in the Swiss Alps',
    message:
      'The mountain views were absolutely spectacular. One of the best hiking experiences of my life!',
    tags: ['hiking', 'mountains', 'switzerland', 'adventure'],
    selectedFile:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800',
    likes: [],
    comments: ['Incredible landscape!', 'How long was the hike?'],
  },
  {
    title: 'Cherry Blossoms in Tokyo',
    message:
      'Spring in Tokyo is magical. The cherry blossoms are in full bloom and the city is buzzing with energy.',
    tags: ['travel', 'japan', 'tokyo', 'spring', 'nature'],
    selectedFile:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
    likes: [],
    comments: ['So beautiful!', 'I love Japanese culture'],
  },
  {
    title: 'Northern Lights Adventure',
    message:
      'Witnessed the Aurora Borealis in Iceland. Words cannot describe how beautiful it was in person!',
    tags: ['iceland', 'nature', 'northernlights', 'adventure'],
    selectedFile:
      'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800',
    likes: [],
    comments: ['On my bucket list!', 'Amazing natural phenomenon'],
  },
  {
    title: 'New York City Lights',
    message:
      'The city that never sleeps! Times Square at night is an experience everyone should have.',
    tags: ['travel', 'newyork', 'usa', 'city'],
    selectedFile:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    likes: [],
    comments: ['Love NYC!', 'The energy of this city is unmatched'],
  },
  {
    title: 'Safari in Kenya',
    message:
      'Saw lions, elephants, and giraffes in their natural habitat. An unforgettable wildlife experience!',
    tags: ['safari', 'kenya', 'wildlife', 'africa', 'adventure'],
    selectedFile:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    likes: [],
    comments: ['Dream trip!', 'How was the safari experience?'],
  },
  {
    title: 'Ancient Rome Exploration',
    message:
      'Walking through the Colosseum and Roman Forum felt like stepping back in time. History comes alive here!',
    tags: ['travel', 'rome', 'italy', 'history'],
    selectedFile:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    likes: [],
    comments: ['Rome is incredible!', 'I studied Roman history in school'],
  },
  {
    title: 'Great Barrier Reef Diving',
    message:
      'Snorkeling in the Great Barrier Reef was surreal. The marine life and coral formations are spectacular!',
    tags: ['diving', 'australia', 'ocean', 'adventure', 'nature'],
    selectedFile:
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800',
    likes: [],
    comments: ['Protect our oceans!', 'How was the water temperature?'],
  },
  {
    title: 'Machu Picchu Trek',
    message:
      'Reached the ancient Incan city after a 4-day trek. The views and history made every step worth it!',
    tags: ['peru', 'hiking', 'machupicchu', 'adventure', 'history'],
    selectedFile:
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
    likes: [],
    comments: ['Bucket list destination!', 'How challenging was the trek?'],
  },
  {
    title: 'Santorini Sunsets',
    message:
      'The white and blue buildings against the Aegean Sea create the most picturesque views. Greece is stunning!',
    tags: ['greece', 'santorini', 'sunset', 'travel'],
    selectedFile:
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    likes: [],
    comments: ['Dream destination!', 'The architecture is so unique'],
  },
  {
    title: 'Dubai Skyline',
    message:
      'Visited the Burj Khalifa and experienced luxury like never before. Dubai is a city of superlatives!',
    tags: ['dubai', 'uae', 'travel', 'architecture'],
    selectedFile:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    likes: [],
    comments: ['Modern marvel!', 'How was the view from the top?'],
  },
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(CONNECTION_URL);
    console.log('✓ Connected to MongoDB');

    // Clear existing data
    console.log('\nClearing existing data...');
    await User.deleteMany({});
    await PostMessage.deleteMany({});
    console.log('✓ Cleared existing users and posts');

    // Create users
    console.log('\nCreating users...');
    const createdUsers = [];

    for (const userData of usersData) {
      const hashedPassword = await bcrypt.hash(userData.password, 12);
      const user = await User.create({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      });
      createdUsers.push(user);
      console.log(`✓ Created user: ${user.name} (${user.email})`);
    }

    // Create posts with random users as creators
    console.log('\nCreating posts...');
    for (const postData of postsData) {
      const randomUser =
        createdUsers[Math.floor(Math.random() * createdUsers.length)];

      // Randomly assign likes from other users
      const randomLikes = createdUsers
        .filter(() => Math.random() > 0.5)
        .map((user) => user._id.toString())
        .slice(0, Math.floor(Math.random() * 3) + 1);

      const post = await PostMessage.create({
        ...postData,
        name: randomUser.name,
        creator: randomUser._id.toString(),
        likes: randomLikes,
      });
      console.log(`✓ Created post: ${post.title}`);
    }

    console.log('\n✅ Seed data created successfully!');
    console.log(`\nSummary:`);
    console.log(`- ${createdUsers.length} users created`);
    console.log(`- ${postsData.length} posts created`);
    console.log(`\nTest credentials (password: password123):`);
    usersData.forEach((user) => {
      console.log(`  - ${user.email}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
