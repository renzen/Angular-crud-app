import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule,}  from '@angular/router';
import { MessageComponent } from './message/message.component';
import { EditUserComponent } from './edit-user/edit-user.component'; //HashLocationStrategy
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { SupportComponent } from './support/support.component';
import { PricingComponent } from './pricing/pricing.component'; 

//Apps roots / HashLocationStrategy
const appRoots = [
{ path: '**', redirectTo: 'PageNotFoundComponent' } 
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    MessageComponent,
    EditUserComponent,
    AdduserComponent,
    SupportComponent,
    PricingComponent
  ],
  imports: [
    RouterModule.forRoot(appRoots, { enableTracing: true, useHash:false }), // HashLocationStrategy
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
