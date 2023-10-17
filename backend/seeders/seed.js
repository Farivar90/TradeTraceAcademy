require('dotenv').config();

const mongoose = require('mongoose');
const Category = require('../models/Category'); // Update this path to point to your actual Category model file
const IncomeCategory = require('../models/IncomeCategory');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
})
.catch(err => console.log(err));
