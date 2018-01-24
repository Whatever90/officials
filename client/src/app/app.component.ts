import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	movies;
	poisk = { value:'' };
	constructor(private _taskService: TaskService, private _r: Router,  private _http: Http) {

	};
	onSubmit(){
		};
	
	  
}
