const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');

// set up custome route
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(e => console.log(e));

app.get('/', (req, res) => res.send('hello world'));

// use custome routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
