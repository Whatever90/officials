import { Component, OnInit } from '@angular/core';
import { Official } from './../official';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {NgForm} from '@angular/forms';
import { FormsModule }        from '@angular/forms';
import { Post } from './../post';
import { Comment } from './../comment';
import { ReactiveFormsModule }          from '@angular/forms';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./Features-Clean.css', './Footer-Dark.css', './Navigation-Clean1.css', './official.component.css'] //styleUrls: ['./official.component.css']
})
export class OfficialComponent implements OnInit {
	official;
	id;
	promises = [];
	succeed = [];
	failed = [];
	proccessing = [];
	total = 0;
	user;
	post = new Post();
	comment = new Comment();
	arrComments = [];
	comments;
	posts;
	admin = false;



  constructor(private _taskService: TaskService, private _route: ActivatedRoute , private _http: Http, private _r: Router) {
  	
  	this._route.paramMap.subscribe( params => {
       	       console.log(params.get('id'));
       	       this.id = params.get('id');
   	      })
  	this.user = this._taskService.user;
  	this.getTheOfficial(this.id);
  	this.getPromises(this.id);
  	this.showAllPosts(this.id);
  	if(this.user){
  		console.log("admin is here")
  		this.admin = true;
  	}else{
  		console.log("hello!")
  		this.admin = false;
  	}
  }

  ngOnInit() {
  }
  getTheOfficial(id){
  	this._taskService.findOne(id, function(data,err){
  		if(data){
  			this.official = data;
  		}
  		if(err){
  			console.log(err);
  		}
  	}.bind(this))
  }
  getPromises(id){

  	this._taskService.getPromises(id, function(data, err){
  		if(data){
  			this.promises = data;
  			this.total = data.length;
  			this.sortProms(this.promises); 
  		}else if(err){
  			console.log(err);
  		}
  	}.bind(this))
  }
  sortProms(arr){
  	this.failed = [];
  	this.succeed = [];
  	this.proccessing = [];
  	console.log(arr);
  	for(let i = 0; i<arr.length; i++){
  		if(arr[i]["status"]=="succeed"){
  			this.succeed.push(arr[i])
  		}else if(arr[i]["status"]=="failed"){
  			this.failed.push(arr[i])
  		}else if(arr[i]["status"]=="inproccess"){
  			this.proccessing.push(arr[i]);
  		}
  	}
  };
  onChange(id,status) {
    console.log(id,status);
    if(!status){
    	return;
    }
    this._taskService.promiseUpdate(id, status);
    this.getPromises(this.id);
    this.sortProms(this.promises);
  };

  ////////////////POSTS AND COMMENTS////////////////////
  createPost(){
  	this.post.official_id = this.id;
  	if(this.post.user.length<1){
  		this.post.user = "Anonymous";
  	}
  	this._taskService.createPost(this.post, function(data, err){
  		if(data){
  			this.showAllPosts(this.id)
  		}else{
  			console.log(err);
  		}
  	})
  	this.post = new Post();
  	this.showAllPosts(this.id);
  };
  createComment(ind, id2){
  	if(this.arrComments[ind]['user'].length<1){
  		this.arrComments[ind]['user'] = "Anonymous"
  	}
  	this.arrComments[ind]["post_id"] = id2;
  	this._taskService.createComment1(this.arrComments[ind], function(data, err){
  		if(data){
  			console.log("comment created")
  		}else{
  			console.log(err);
  		}
  	})
  	this.arrComments[ind] = new Comment();
  	this.populateComments();
  };


  showAllPosts(id){
  	this._taskService.showPosts(id, function(data, err){
  		if(data){
  			this.posts = data;
  			this.populateComments();
  		}else{
  			console.log(err)
  		}
  		console.log(this.arrComments);
  	}.bind(this));
  };
 populateComments(){
 	this.arrComments = [];
 	 	for(let i = 0; i<this.posts.length; i++){
  				this.arrComments.push(new Comment());
  				this.posts[i].comments = [];
  				this._taskService.showComments(this.posts[i]._id, function(data, err){
  					if(data){
  						console.log(data)
  						this.posts[i].comments = data;
  					}else{
  						console.log(err);
  					}
  				}.bind(this));
 	}
 };
 deletePost(id){
 	this._taskService.deletePost(id)
 	this.showAllPosts(this.id);
 }
 deleteComment(id){
 	this._taskService.deleteComment(id)
 	this.populateComments();
 }

}
