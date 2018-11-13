import {  ModuleWithProviders  } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { SupportComponent } from './support/support.component';
import { PricingComponent } from './pricing/pricing.component';

const appRoutes: Routes = [
{
 path: '',
 pathMatch: 'full',
 component: UsersComponent
},
{
  path: 'addUser',
  component: AdduserComponent
 },
{
  path: 'details/:id',
  component: DetailsComponent
 },
 {
  path: 'posts',
  component: PostsComponent
 },
 {
  path: 'edit/:id',
  component: EditUserComponent
 },
 {
  path: 'support',
  component: SupportComponent
 },
 {
  path: 'pricing',
  component: PricingComponent
 },


 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
