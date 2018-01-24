var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var Official = mongoose.model('Official');
//console.log(User)
module.exports = {
   all: function(req, res){
    Official.find({status: "confirmed"})
              .then(data => {
                res.json(data);
                console.log(data);
              })
              .catch(err => {
                console.log(err);
              });
              
    },
    unconfirmed: function(req, res){
      Official.find({status: "unconfirmed"})
              .then(data => {
                console.log(data);
                res.json(data);
              })
              .catch(err => {
                console.log(err);
              });
              
    },
    confirm: function(req, res){
      console.log("activating", req.body.id)
      Official.update({_id: req.body.id}, {$set: {status: "confirmed"}})
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
        Official.findOne({first_name: req.body.first_name, last_name: req.body.last_name})
          .then(data => {
            if(data) {
                console.log(data)
                console.log('official is here!')
                res.json(false)
            } else {
              console.log('creating')
              var official = new Official({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: 0,
                description: req.body.description,
                photo: req.body.photo,
                status: "unconfirmed"
              });
          official.save()
            .then(saved => {
              console.log('saved!')
              res.json(saved)
            })
            .catch(err => {
              console.log('saving failed')
              res.json(err)
            })
            }
          })
  },
  find: function(req, res){
    console.log(console.log("LET'S FIND SOMEONE", req.body.id));
    Official.findOne({_id: req.body.id}, function(data, err){
      if(data){
        res.json(data);
      }else{
        res.json(err);
      }
    })
  }

}
