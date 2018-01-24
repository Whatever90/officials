import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import { User } from './../user';
import { LoginUser } from './../loginUser';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.css']
})
export class HomeOneComponent implements OnInit {
  users;
  user = new User();
  loginUser = new LoginUser();
  officials = [];
  error;
  errormessage;
  constructor(private _route: ActivatedRoute , private _http: Http, private _r: Router, private _taskService: TaskService) { 
    this.showUser();
  	this.showAllOfficials();
  }

  showAll(){

  }
  ngOnInit() {
  }
  showUser(){
    this.user = this._taskService.user;
    console.log(this.user);
  }
  showAllOfficials(){
    this._taskService.showAllOfficials(function(data,err){
      console.log(data)
      console.log('----------------------')
      console.log(err)
      if(data){
        this.officials = data; 
      }
      if(err){
        console.log(err);
      }
    }.bind(this));
  }


}
