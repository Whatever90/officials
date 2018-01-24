var mongoose = require('mongoose');
// 

var commentSchema = new mongoose.Schema({
    text:  { type: String, required: [true, 'Message is required'], minlength: [1, 'comment IS TOO SHORT']},
    post_id:  { type: String, required: [true, 'Official Id is required']},
    user:  { type: String }
}, {timestamps: true });

var Comment = mongoose.model('Comment', commentSchema) 
