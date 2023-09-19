// controllers/userController.js
const User = require('../models/user.js');

// Function to find the highest alphabet in an array
function findHighestAlphabet(arr) {
  const alphabetSet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
  let highestAlphabet = '';

  for (const char of arr) {
    const upperChar = char.toUpperCase();
    if (alphabetSet.has(upperChar)) {
      highestAlphabet = upperChar > highestAlphabet ? upperChar : highestAlphabet;
    }
  }

  return highestAlphabet;
}

// POST /bfhl
exports.postData = async (req, res) => {
  try {
    const { data } = req.body;

    // Separate the alphabets and numbers from the input data
    const alphabets = data.filter((char) => /[A-Za-z]/.test(char));
    const numbers = data.filter((char) => /[0-9]/.test(char));

    // Calculate the highest_alphabet from the alphabets array
    const highestAlphabet = findHighestAlphabet(alphabets);

    const newUser = new User({
      fullName: 'Harshit_mongre', 
      dob: new Date('2002-04-06'), 
      email: 'harshit.mongre2020@vitbhopal.ac.in', 
      rollNumber: '20BAC10034', 
      numbers, 
      alphabets, 
      highestAlphabet,
    });

    const savedUser = await newUser.save();

    const response = {
      is_success: true,
      user_id: `${savedUser.fullName}_${savedUser.dob.getDate()}${savedUser.dob.getMonth() + 1}${savedUser.dob.getFullYear()}`,
      email: savedUser.email,
      roll_number: savedUser.rollNumber,
      numbers: savedUser.numbers,
      alphabets: savedUser.alphabets,
      highest_alphabet: highestAlphabet ? [highestAlphabet] : [], 
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET /bfhl
exports.getOperationCode = (req, res) => {
  return res.status(200).json({ operation_code: 1 });
};
