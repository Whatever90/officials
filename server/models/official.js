var mongoose = require('mongoose');
// 

var officialSchema = new mongoose.Schema({
    first_name:  { type: String, required: [true, 'Name is required'], minlength: [2, 'First name IS TOO SHORT']},
    last_name:  { type: String, required: [true, 'LastName is required'], minlength: [2, 'last name IS TOO SHORT']},
    description:  { type: String },
    rating:  { type: Number },
    photo:  { type: String },
    state:  { type: String },
    city:  { type: String },
    status: { type: String }
}, {timestamps: true });

var Official = mongoose.model('Official', officialSchema) 
