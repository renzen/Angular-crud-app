// // import { Component, OnInit } from '@angular/core';
// // import { DataService } from '../services/data.service';
// // import { Users, UserDetails, Address, GeoLoc  } from '../model/shared/user.model';
// // import { ActivatedRoute } from '@angular/router'; 
// // import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// // import { DatePipe } from '@angular/common'; 
// // import { Router } from '@angular/router';

// @Component({
//   selector: 'app-adduser',
//   templateUrl: './adduser.component.html',
//   styleUrls: ['./adduser.component.css']
// })
// export class AdduserComponent implements OnInit {

//   private successMessage: string;
//   private errorMessage: string;
//   private user: Users;
//   private id: Object;
//   private FormControl: string;
//   AddUserForm: FormGroup;
//   user$: Object;
//   submitted = false;

//   constructor( 
//     private service: DataService , 
//     private route: ActivatedRoute, 
//     private _fb: FormBuilder, 
//     private datepipe: DatePipe,
//     private router: Router  ) { }

//   ngOnInit() {
//     this.AddUserForm = this._fb.group({
//         // id: [''],
//         userName: ['', Validators.required],
//         password: ['', Validators.required],
//         active: ['', Validators.required],
//         userDetails: this.initDetails()
//         });

      
// }

// initDetails(){
//   return this._fb.group({
//     firstName: ['', Validators.required],
//     lastName: ['', Validators.required],
//     email: ['', Validators.required],
//     gender: ['', Validators.required],
//     birth: Date,
//     phone: ['', Validators.required],
//     website: ['', Validators.required],
//     address: this.initAddress(),
//  });
// }
    
//   initAddress() {
//   return this._fb.group({
//     street: ['', Validators.required],
//     suite: ['', Validators.required],
//     city: ['', Validators.required],
//     zipCode: ['', Validators.required],
//     geoLoc: this.initGeo()
//   });
// }

//  initGeo() {
//   return this._fb.group({
//     lat: ['', Validators.required],
//     lng: ['', Validators.required],
//   })
// }

// get FirstName() {
//   return this.AddUserForm.get('FirstName');
// }


// get lastName() {
//   return this.AddUserForm.get('lastName');
// }

// get email() {
//   return this.AddUserForm.get('email');
// }

// get phone() {
//   return this.AddUserForm.get('phone');
// }

// get website() {
//   return this.AddUserForm.get('website');
// }


// onSubmit(model:any): void {
//   this.submitted = true;
//   if (this.AddUserForm.invalid) {
//     return;
// }
  
// const custInfo: Users = {
//   UserName: model.UserName,
//   Password: model.Password,
//   Active: model.Active
// }

// const custDetails: UserDetails ={
//   FirstName: model.FirstName,
//   LastName: model.LastName,
//   Email: model.Email,
//   Gender: model.Gender,
//   Birth: model.Birth,
//   Phone: model.Phone,
//   Website: model.Website,
// }

// const custAddress: Address = {
// Street: model.Street,
// Suite: model.Suite,
// City: model.City,
// ZipCode: model.ZipCode,
// }

// const custGeoLoc: GeoLoc = {
//   lat: model.lat,
//   lng: model.lng,

// }


//     //alert(new Date(userdata.userDetails.birth), 'yyyy-MM-dd');
//   } 

//      /*** Add the user */
//      AddUser(user:Users) {
//       this.successMessage = '';
//       this.errorMessage   = '';
//      alert(JSON.stringify(user));
  
//      this.service.AddUser(user)
//         .subscribe(s=> console.log(s));
//         //   user => {
//         //     this.successMessage = 'User was updated.';
//         //     console.log('user was updated');
//         //   },
//         //   err => {
//         //     this.errorMessage = err;
//         //     console.error(err);
//         //   }        
//         // );
//   }



// }
