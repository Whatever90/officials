var mongoose = require('mongoose');
// 

var promiseSchema = new mongoose.Schema({
    official_id:  { type: String, required: [true, 'official_id is required'], minlength: [2, 'TOO SHORT']},
    title:  { type: String, required: [true, 'Title is required'], minlength: [2, 'TOO SHORT']},
    description:  { type: String },
    status:  { type: String, required: [true, 'Status is required'], minlength: [2, 'TOO SHORT']},
    link:  { type: String },
}, {timestamps: true });

var Promise = mongoose.model('Promise', promiseSchema) 
