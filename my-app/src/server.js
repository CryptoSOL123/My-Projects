const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://pradyun4050:eQbEdNFFepXobjSS@cluster0.d3yc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => console.error('MongoDB connection error:', err));
db.once('open', () => console.log('MongoDB connected...'));

// Basic routes
app.get('/', (req, res) => {
  res.send('Welcome to the Education app API!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
