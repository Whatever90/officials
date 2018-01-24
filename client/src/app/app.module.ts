import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Utilized for Angular forms
import { HttpModule } from '@angular/http'; //Utilized for Angular HTTP requests to any API.
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeOneComponent } from './home-one/home-one.component';
import { TaskService } from './task.service';
import { AppRoutingModule } from './app-routing.module';
import { RegComponent } from './reg/reg.component';
import { EditComponent } from './edit/edit.component';
import { NewdepComponent } from './newdep/newdep.component';
import { OfficialComponent } from './official/official.component';
import { RequestComponent } from './request/request.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
//import { LocalStorageService } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeOneComponent,
    RegComponent,
    EditComponent,
    NewdepComponent,
    OfficialComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpModule 
  ],
  providers: [TaskService, 
    { provide: LocationStrategy, useClass: HashLocationStrategy }], //added 1/21
  bootstrap: [AppComponent]
})
export class AppModule { }
