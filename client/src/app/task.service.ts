import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import "rxjs/Rx";
@Injectable()
export class TaskService {
	user = null;
	users;
	official;
  constructor(private _r: Router, private _http: Http) { }

  create(user, callback){
      console.log('second step of storing')
      this._http.post("/user/new", user)
        .map(data => data.json() ) //
        .subscribe(data => callback(data))
   };
   login(user, callback){
     console.log('second step of login')
      this._http.post("/user/login", user)
        .map(data => data.json() ) //
        .subscribe(data => callback(data))
   };
   storeUs(user){
   	this.user = user;
   };
   // getUser(callback){
   //   callback(this.user);
   // };
   logout(){
   	this.user = null;
   };
   showAll(callback){
   	console.log('show all!')
   	this._http.get("/user/all").subscribe(
         (data) => callback(data.json()),
         (err) => callback(err)
      )
   		
   };
   newOfficial(official, callback){
   	this._http.post("/official/new", official)
   		.map(data => data.json() ) //
        .subscribe(data => callback(data))
   };
   newProm(prom, callback){
     this._http.post("/prom/new", prom)
       .map(data => data.json() ) //
        .subscribe(data => callback(data))
   };
   showAllOfficials(callback){
   	this._http.get("/official/all").subscribe(
         (data) => callback(data.json()),
         (err) => callback(err)
      )
   };
   findOne(id, callback){
     id={
       id:id
     }
     this._http.post("/official/find", id)
      .map(data => data.json())
      .subscribe(data=> callback(data))
   }
   showAllUnconfirmedOfficials(callback){
     this._http.get("/official/unconfirmed")
       .map(data => data.json())
       .subscribe(data => callback(data))
   }
   confirmOfficial(id){
     id={
       id:id
     }
     this._http.post("/official/confirm", id)
       .map(data => data.json())
       .subscribe(data => console.log(data));
   }
   ////
   getPromises(id, callback){
     id={
       id:id
     }
     this._http.post("/prom/find", id)
      .map(data => data.json())
      .subscribe(data=> callback(data))
   };
   newRequest(request, callback){
     this._http.post("/request/new", request)
      .map(data => data.json())
      .subscribe(data=> callback(data))
   };
   allRequests(callback){
     this._http.get("/request/all")
      .map(data => data.json())
      .subscribe(data=> callback(data))
   };
   promiseUpdate(id, status){
     id = {
       id: id,
       status: status
     }
     this._http.post("/prom/update", id)
       .map(data => data.json())
       .subscribe(data => console.log(data))
   }
   ///////////comments/////
   createPost(post, callback){
     this._http.post("/post/create", post)
       .map(data => data.json())
       .subscribe(data=> callback(data))
   };

   createComment1(comment, callback){
     this._http.post("/comment/create", comment)
       .map(data => data.json())
       .subscribe(data=> callback(data))
   };

   showPosts(id, callback){
     id = {
       id:id
     }
     this._http.post("/post/find", id)
       .map(data => data.json())
       .subscribe(data => callback(data))
   };

   showComments(id, callback){
     id = {
       id:id
     }
     this._http.post("/comment/find", id)
       .map(data => data.json())
       .subscribe(data => callback(data))
   };
   deletePost(id){
     id = {
       id:id
     }
     this._http.post("/post/delete", id)
       .map(data => data.json())
       .subscribe(data => console.log(data))
     };

   deleteComment(id){
     id = {
       id:id
     }
     this._http.post("/comment/delete", id)
       .map(data => data.json())
       .subscribe(data => console.log(data))
   };
}

	
