var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var Post = mongoose.model('Post');
//console.log(User)
module.exports = {
   all: function(req, res){
    Post.find({})
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
        var post = new Post({
            text: req.body.text,
            official_id: req.body.official_id,
            user: req.body.user
        });
        post.save()
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
    Post.find({official_id: req.body.id}, function(data, err){
      if(data){
        res.json(data);
      }else{
        res.json(err);
      }
    })
  },
  remove: function(req, res){
    console.log(req.body.id)
    Post.remove({_id: req.body.id}, function(data, err){
      if(data){
        res.json(data);
      }else{
        res.json(err);
      }
    })
  }

}
