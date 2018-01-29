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
  officials_copy = null;
  error;
  errormessage;
  states = [];
  cities = [];
  search = [];
  typedSearch= {
    'search': ''
  }
  suggetions_bool = false;
  suggetions;
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
      if(data){
        this.officials = data;
        this.officials_copy = data;
        this.states = [];
        for(let i = 0; i<this.officials.length; i++){
            if(!this.states.includes(this.officials[i].state)){
              this.states.push(this.officials[i].state);
              this.states[this.officials[i].state] = [];
              this.states[this.officials[i].state].push(this.officials[i].city);
            }else if(!this.states[this.officials[i].state].includes(this.officials[i].city)){
              this.states[this.officials[i].state].push(this.officials[i].city);
            }
             this._taskService.getPromises(this.officials[i]._id, function(data, err){
                if(data){
                  let res = 0;
                  for(let i = 0; i<data.length; i++){
                    if(data[i].status==="succeed"){
                      res++;
                    }else if(data[i].status==="failed"){
                      res--;
                    }
                  }
                  this.officials[i].rating = (res/data.length)*100;
                }else if(err){
                  console.log(err);
                }
              }.bind(this))
        } 
      }
      if(err){
        console.log(err);
      }
      console.log(this.states)
    }.bind(this));
  };
  findTypedState(val){
    if(val.length==0){
      this.suggetions = [];
      this.suggetions_bool = false;
      this.showAllOfficials();
      return;
    }
    this.suggetions = [];
    let fname;
    let lname;
    let st;
    let ct;

    for(let i = 0; i<this.officials.length; i++){
      fname = this.officials[i].first_name.toLowerCase()
      lname = this.officials[i].last_name.toLowerCase()
      st = this.officials[i].state.toLowerCase()
      ct = this.officials[i].city.toLowerCase()
      if(fname.includes(val) || lname.includes(val) || st.includes(val) || ct.includes(val)){
        this.suggetions.push(this.officials[i]);
      }
    }
    if(this.suggetions.length>0){
      this.suggetions_bool = true;
    }

  }
  findState(state){
    if(state==='all'){
      this.showAllOfficials();
    }
    console.log(state)
    this.officials = this.officials_copy;
    this.search = [];
    this.cities = this.states[state];
    this.search["state"] = state;
    var res = [];
    for(let i = 0; i< this.officials.length; i++){
      if(this.officials[i].state ==state){
        res.push(this.officials[i]);
      }
    }
    this.officials = res;
  }

  findCity(city){
    this.search["city"] = city;
    this.findState(this.search['state']);
    let res = [];
    console.log(this.officials);
    for(let i = 0; i<this.officials.length; i++){
      if(this.officials[i].city == city){
        console.log(this.officials[i])
        res.push(this.officials[i]);
      }
    }
    this.officials = res;
    // this._taskService.filterByLocation(this.search, function(data, err){
    //   if(data){
    //     this.officials = data;
    //     for(let i = 0; i<this.officials.length; i++){
    //          this._taskService.getPromises(this.officials[i]._id, function(data, err){
    //             if(data){
    //               let res = 0;
    //               for(let i = 0; i<data.length; i++){
    //                 if(data[i].status==="succeed"){
    //                   res++;
    //                 }else if(data[i].status==="failed"){
    //                   res--;
    //                 }
    //               }
    //               this.officials[i].rating = (res/data.length)*100;
    //             }else if(err){
    //               console.log(err);
    //             }
    //           }.bind(this))
    //     } 
    //   }else if(err){
    //     console.log(err)
    //   }
    // }.bind(this))
  }


}
