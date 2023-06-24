const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db.js')
const Post = require('./models/Post.js')

connectDB();

const app = express();

app.use(express.json()); //to parse the json from the request
app.use(cors()); // Enable CORS middleware

// Define your routes and middleware here

app.get("/", (req, res) => {                   //main route
    res.send("BlogFolio API is running.");
});

// Start the server
const port = process.env.PORT || 5000; 
app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`);
    }
});


// Create a new post
app.post('/posts', async (req, res) => {
  try {
    const { name, email, heading, content, category, createdAt } = req.body;

    const newPost = new Post({
      name,
      email,
      heading,
      content,
      category,
      createdAt,
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


