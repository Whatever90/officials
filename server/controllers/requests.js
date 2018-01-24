var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var Request = mongoose.model('Request');
//console.log(User)
module.exports = {
   all: function(req, res){
    console.log("all requests")
    Request.find({})
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
        Request.findOne({link: req.body.link, description: req.body.description})
          .then(data => {
            if(data) {
                console.log(data)
                console.log('request is here!')
                res.json(false)
            } else {
              console.log('creating')
              var request = new Request({
                link: req.body.link,
                description: req.body.description,
                email: req.body.email
              });
          request.save()
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

}
