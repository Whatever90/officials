import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import { User } from './../user';
import { LoginUser } from './../loginUser';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
	user = new User();
	loginUser = new LoginUser();
  constructor(private _route: ActivatedRoute , private _http: Http, private _r: Router, private _taskService: TaskService) { }

  ngOnInit() {
  }
  onSubmit(){
      console.log(this.user)
      this._taskService.create(this.user, function(data, err){
        console.log(data)
        if(err){
          console.log('something wrong');
          console.log(err);
          alert('email is already used by another user')
        }
        if(data){
          console.log('exellent!')
          console.log(data)
          this.storeUser(data)
          this.errormessage = '';
          this._r.navigateByUrl('enter')
        }
      }.bind(this))
      this.user = new User();
    
  }
  login(){
    this._taskService.login(this.loginUser, function(data){
      console.log(data)
      if(!data){
        console.log('failed to login')
        alert('wrong email or password')
      }
      if(data){
        this.storeUser(data)
        console.log('logining')
        this.storeUser(data);
        this._r.navigateByUrl('enter')
      }
    }.bind(this))
    this.loginUser = new LoginUser;

  }
  storeUser(user){
    this._taskService.storeUs(user)
  }
  logout(){
    this._taskService.logout();
  }
}
