const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/grocery_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
