var mongoose = require('mongoose');
// 

var postSchema = new mongoose.Schema({
    text:  { type: String, required: [true, 'Message is required'], minlength: [1, 'MESSAGE IS TOO SHORT']},
    official_id:  { type: String, required: [true, 'Official Id is required']},
    user:  { type: String }
}, {timestamps: true });

var Post = mongoose.model('Post', postSchema) 
