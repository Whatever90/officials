import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ReactiveFormsModule }          from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	id;
	official = null;
	bool = false;
	delete = false;
  constructor(private _taskService: TaskService, private _route: ActivatedRoute , private _http: Http, private _r: Router) { 
  	this._route.paramMap.subscribe( params => {
       	       console.log(params.get('id'));
       	       this.id = params.get('id');
   	      });
  	this.getTheOfficial(this.id);

  }

  ngOnInit() {
  }
  getTheOfficial(id){
  	this._taskService.findOne(id, function(data,err){
  		if(data){
  			this.official = data;
  			console.log(this.official)
  			this.bool = true;
  		}
  		if(err){
  			console.log(err);
  		}
  	}.bind(this))
  }
  onSubmit(){
  	this._taskService.officialUpdate(this.official);
  	this._r.navigateByUrl('enter');
  }
  deleteOne(){
  	this.delete = true;
  }
  deleteTwo(){
  	if(this.delete){
  		this._taskService.deleteOfficial(this.id);
  		this._r.navigateByUrl('enter');
  	}
  }
}
