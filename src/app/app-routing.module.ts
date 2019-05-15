import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {AddComponent} from './posts/add/add.component';
import {DetailsComponent} from './posts/post/details/details.component';

const routes: Routes = [
  {path: '', component:PostsComponent},
  {path: 'posts/add',component:AddComponent},
  {path:'posts/details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
