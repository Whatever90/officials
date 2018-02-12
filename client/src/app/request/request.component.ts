import { Component, OnInit } from '@angular/core';
import { Request } from './../request';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Official } from '../official';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./Footer-Dark.css', './Navigation-Clean1.css', './Projects-Horizontal.css', './request.component.css']
})
export class RequestComponent implements OnInit {
	request = new Request();
	official = new Official();
	url_pattern = "^(http[s]?:\\/\\/){0,1}(www\\.){0,1}[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,5}[\\.]{0,1}$";
  constructor(private _taskService: TaskService, private _r: Router) { }

  ngOnInit() {
  }
  newRequest(){
  	console.log(this.request)
      this._taskService.newRequest(this.request, function(data){
        console.log(data)
        if(!data){
          console.log('something wrong')
          alert('such official is already exists!')
        }
        if(data){
          console.log('exellent!')
          console.log(data)
          this._r.navigateByUrl('enter')
        }
      }.bind(this))
      this.request = new Request();
  }
  onSubmit(){
    console.log(this.official)
      this._taskService.newOfficial(this.official, function(data){
        console.log(data)
        if(!data){
          console.log('something wrong')
          alert('such official is already exists!')
        }
        if(data){
          console.log('exellent!')
          console.log(data)
          this._r.navigateByUrl('enter')
        }
      }.bind(this))
      this.official = new Official();
      
  }
}
