var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var Comment = mongoose.model('Comment');
//console.log(User)
module.exports = {
   all: function(req, res){
    Comment.find({})
              .then(data => {
                res.json(data);
                console.log(data);
              })
              .catch(err => {
                console.log(err);
              });
              
    },
  
  new: function(req, res) {
        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(req.body)
        console.log('+++++++++++++++++++')
        var comment = new Comment({
            text: req.body.text,
            post_id: req.body.post_id,
            user: req.body.user
        });
        comment.save()
          .then(saved => {
            console.log('saved!')
            res.json(saved)
          })
          .catch(err => {
            console.log('saving failed')
            res.json(err)
          })
            
          
  },
  find: function(req, res){
    console.log(console.log("LET'S FIND SOME posts for ", req.body.id));
    Comment.find({post_id: req.body.id}, function(data, err){
      if(data){
        res.json(data);
      }else{
        res.json(err);
      }
    })
  },
  remove: function(req, res){
    console.log(req.body.id)
    Comment.remove({_id: req.body.id}, function(data, err){
      if(data){
        res.json(data);
      }else{
        res.json(err);
      }
    })
  }

}
