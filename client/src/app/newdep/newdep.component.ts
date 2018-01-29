import { Component, OnInit } from '@angular/core';
import { Official } from './../official';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Promise } from '../promise';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-newdep',
  templateUrl: './newdep.component.html',
  styleUrls: ['./newdep.component.css']
})
export class NewdepComponent implements OnInit {
	official = new Official();
  promise = new Promise();
  officials;
  un_officials;
  requests;
  user = null;
  un_officials_bool = false;
  constructor(private _taskService: TaskService, private _route: ActivatedRoute , private _http: Http, private _r: Router) {
  	this.showUser();
    this.unconfirmed();
    this.allRequests();
    this.allConfirmedOfficials();
	   }

  ngOnInit() {
  }


  newProm(){
    this._taskService.newProm(this.promise, function(data, err){
      if(data){
        console.log("YES!");
        this._route.navigateByUrl('enter')
      }else{
        console.log(err);
      }
    })
  }
  allConfirmedOfficials(){
    this._taskService.showAllOfficials(function(data,err){
      if(data){
        this.officials = data;
        console.log(data); 
      }
      if(err){
        console.log(err);
      }
    }.bind(this));
  }
  allRequests(){
    this._taskService.allRequests(function(data,err){
      if(data){
        this.requests = data; 
      }
      if(err){
        console.log(err);
      }
    }.bind(this));
  }

  unconfirmed(){
    this._taskService.showAllUnconfirmedOfficials(function(data,err){
 
      if(data){
        this.unofficials = data;
        if(data.length>0){
          this.un_officials_bool = true;
        } 
        console.log(data)
      }
      if(err){
        console.log(err);
      }
    }.bind(this));
  }
  confirm(id){
    this.un_officials = this.un_officials.filter(e => e._id !== id);
    this._taskService.confirmOfficial(id);
  }
   showUser(){
    this.user = this._taskService.user;
    if(this.user==null){
      this._r.navigateByUrl('enter');
    }
  }
}
