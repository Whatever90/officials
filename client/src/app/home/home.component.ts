import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	movies;
	poisk = { value:'' };
	constructor(private _taskService: TaskService, private _r: Router,  private _http: Http) {

	};
	onSubmit(f: NgForm) {
    	
	   
  	}
	search(){
		
	}

	showAll(){
	}
	  ngOnInit() {
	  // 	this._taskService.showAll(function(data, err){
	  //     console.log(data)
	  //     console.log('----------------------')
	  //     console.log(err)
	  //     if(data){
	  //       this.movies = data
	  //       console.log(this.movies.length)
	  //     }else if(err){
	  //       console.log('error')
	  //       this.products = err;
	  //     }
	  //   }.bind(this))
	  }
}
