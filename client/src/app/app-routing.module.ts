import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';
import { RegComponent } from './reg/reg.component';
import { NewdepComponent } from './newdep/newdep.component';
import { OfficialComponent } from './official/official.component';
import { RequestComponent } from './request/request.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'enter', component: HomeOneComponent, pathMatch: 'full' },
	{ path: 'enter/:id', component: OfficialComponent, pathMatch: 'full' },
	{ path: 'signin', component: RegComponent, pathMatch: 'full' },
	{ path: 'newofficial', component: NewdepComponent, pathMatch: 'full' },
	{ path: 'newrequest', component: RequestComponent, pathMatch: 'full' },
	{ path: 'edit/:id', component: EditComponent, pathMatch: 'full' },
	
	// { path: 'ratings', component: PostsComponent },
	// { path: 'players/addplayer', component: HomeNewComponent },
	// { path: 'players/delete/:id', component: HomeNewComponent },
	
	// { path: 'status/game/2', component: ProductsComponent },
	// { path: 'status/game/3', component: DeleteComponent },
	// { path: 'products/edit/:id', component: EditComponent },
	// { path: 'products/new', component: NewComponent },
	// { path: 'products/delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }