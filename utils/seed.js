const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Get some random thought objects using a helper function that we imported from ./data
  const thoughts = getRandomThought(20);

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const first = username.split(' ')[0];
    //const last = username.split(' ')[1];
    const email = `${first}@${Math.floor(Math.random() * (99 - 18 + 1) + 18)}.com`;

    users.push({
      username,
      //last,
      email,
      thoughts,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
//   await Thought.collection.insertOne({
//     courseName: 'UCLA',
//     inPerson: false,
//     users: [...users],
//   });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
