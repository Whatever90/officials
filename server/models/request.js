var mongoose = require('mongoose');
// 

var requestSchema = new mongoose.Schema({
    link:  { type: String, required: [true, 'link is required'], minlength: [2, 'TOO SHORT']},
    description:  { type: String, required: [true, 'description is required'], minlength: [2, 'TOO SHORT']},
    email:  { type: String, required: [true, 'email is required'], minlength: [2, 'TOO SHORT']}
}, {timestamps: true });

var Request = mongoose.model('Request', requestSchema) 
