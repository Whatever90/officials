var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var Prom = mongoose.model('Promise');
//console.log(User)
module.exports = {
   all: function(req, res){
    Prom.find({})
              .then(data => {
                res.json(data);
              })
              .catch(err => {
                console.log("ERROR")
                console.log(err);
              });
              
    },
  
  new: function(req, res) {

        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(req.body)
        console.log('+++++++++++++++++++')
        Prom.findOne({title: req.body.title, description: req.body.description, link: req.body.link})
          .then(data => {
            if(data) {
                console.log(data)
                console.log('promise is here!')
                res.json(false)
            } else {
              console.log('creating')
              var promise = new Prom({
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                official_id: req.body.official_id,
                link: req.body.link
              });
          promise.save()
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
    Prom.find({official_id: req.body.id}, function(data, err){
      if(data){
        res.json(data);
      }else{
        res.json(err);
      }
    })
  },
  update: function(req, res){
    console.log(req.body.status)
    Prom.update({_id: req.body.id}, {$set: {status: req.body.status}}, function(data, err){
      if(data){
        res.json(data);
      }else{
        res.json(err);
      }
    })
  },
  delete: function(req, res){
    Prom.remove({_id: req.body.id}, false)
      .then(data=>{
        res.json(data);
      })
      .catch(err=>{
        console.log(err)
        res.json(err)
      })
  }


}
