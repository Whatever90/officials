var mongoose = require('mongoose');
// 

var userSchema = new mongoose.Schema({
    first_name:  { type: String, required: [true, 'Name is required'], minlength: [2, 'First name IS TOO SHORT']},
    last_name:  { type: String, required: [true, 'LastName is required'], minlength: [2, 'last name IS TOO SHORT']},
    email:  { type: String, required: [true, 'email is required'], minlength: [2, 'email IS TOO SHORT']},
    status:  { type: String, required: [true, 'status is required'], minlength: [0, 'status IS TOO SHORT']},
    city:  { type: String, required: [true, 'city is required'], minlength: [0, 'city IS TOO SHORT']},
    password:  { type: String, required: [true, 'password is required'], minlength: [2, 'password IS TOO SHORT']},
}, {timestamps: true });

var User = mongoose.model('User', userSchema) 
