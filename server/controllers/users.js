var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')


var User = mongoose.model('User');
//console.log(User)
module.exports = {
   showAll: function(req, res){
    User.find({})
              .then(data => {
                res.json(data);
                console.log(data);
              })
              .catch(err => {
                console.log(err);
              });
              
    },
  
create: function(req, res) {

        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(req.body)
        console.log('+++++++++++++++++++')
        User.findOne({email: req.body.email})
          .then(data => {
            if(data) {
                console.log(data)
                console.log('user is here!')
                res.json(false)
            } else {
              console.log('creating')
              var user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                status: "user",
                city: req.body.city,
                password: req.body.password
              });
          user.save()
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
login: function(req, res) {

        console.log("++++++++++++++++++++++++++++++++++++")
        console.log(req.body.first_name)
        console.log('+++++++++++++++++++')
        User.findOne({email: req.body.email})
          .then(data => {
            if(data) {
                console.log(data)
                if(data.password == req.body.password){
                  console.log("password match!")
                  res.json(data)
                }else{
                  console.log("password doesn't match")
                  res.json(false)
                }
                
            } else {
                console.log('no such email in db')
                res.json(false)
            }
          })
},
contact: function(req, res){

    User.find({_id: req.body.user})
        .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            });
  },



  // })
          // User.update({login: req.body.login}, {$set: {score: req.body.score}}, function(err, data){
          //   if(err){
          //     console.log('Not in DB')
          //     var user = new User({
          //         login: req.body.login,
          //         score: req.body.score,
          //         photo: req.body.photo
          //       });
          //     user.save(function(err, data) {
          //         if(err) {
          //           console.log('failed')
          //           res.json(err)
          //         } else {
          //           console.log("saved")
          //           res.json(data)
          //         }
          //     })
          //   }else{
          //     console.log('updated')
          //     res.json(data)
          //   }
          // })
        
  //   var user = new User({
  //     login: req.body.login,
  //     score: req.body.score,
  //     photo: req.body.photo
  //   });
  // user.save(function(err, data) {
  //     if(err) {
  //       console.log('failed')
  //       res.json(err)
  //     } else {
  //       console.log("saved")
  //       res.json(data)
  //     }
  // })
    
  
//   checker(log){
//     let x = log
//     User.find({login: x}, function(err, user){
//       if(err){
//         console.log('not found')
//         return false
//       }
//       if(user){
//         console.log(user.length)
//         if(user.length==0){
//           return true
//           console.log("nope, user isn't here", x)
          
//         }
//         console.log('yep, user is here', x)
//         return false
//       }
//     })
//   },
// update: function(req, res){

//   console.log(req.body.status)
//   console.log('here')
//   User.update({_id: req.body.id}, {$set: {game1: req.body.status}}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   },  
// update2: function(req, res){

//   console.log(req.body.status)
//   console.log('here')
//   User.update({_id: req.body.id}, {$set: {game2: req.body.status}}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   },  
// update3: function(req, res){

//   console.log(req.body.status)
//   console.log('here')
//   User.update({_id: req.body.id}, {$set: {game3: req.body.status}}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   }, 

// delete: function(req, res){

//   console.log(req.body.id)
//   console.log('here')

//   User.remove({_id: req.body.id}, function(err, data){
//     if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//   })
      
//   },
//   show_user: function(req, res){
//    console.log(req.params.id)
//    User.find({_id: req.params.id}, function(err, data){
//       if(err){
//       console.log('failed to delete')
//       res.json(err);
//       }else{
//       console.log("deleted")
//       res.json(data);
//     }
//     })
//   },
}
