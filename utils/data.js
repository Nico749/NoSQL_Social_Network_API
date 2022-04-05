const names = [
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Smith',
    'Jones',
    'Coollastname',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughtDesc = [
    'Beautiful day...',
    'Find My Phone',
    'Learn Piano',
    'Buying a new car',
    'Check house..',
    'Monopoly Money Manager',
    'Movie trailers',
    'Hello world',
    'Stupid Social Media App',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Bike not working...',
    'Running app',
    'Cooking app',
    'Poker',
    'Deliveries',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random thoughts that we can add to user object.
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtDesc: getRandomArrItem(thoughtDesc),
        //score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThought };
  