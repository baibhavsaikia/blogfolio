const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    heading: { type: String, required: true},
    content: { type: String, required: true},
    category: { type: String, required: true},
    createdAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model('Post', postSchema);