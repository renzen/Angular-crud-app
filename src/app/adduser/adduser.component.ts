import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Users, UserDetails } from '../model/shared/user.model';
import { ActivatedRoute } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {

  private successMessage: string;
  private errorMessage: string;
  private user: Users;
  private id: Object;
  private FormControl: string;
  AddUserForm: FormGroup;
  user$: Object;
  submitted = false;
  today: Date;
      

  constructor( private service: DataService , private route: ActivatedRoute, private _fb: FormBuilder, private datepipe: DatePipe,
    private router: Router,   ) { 
      
      
  }

 
ngOnInit() {

this.createUser();
this.AddUserForm.get('userDetails.gender').patchValue('male');
this.AddUserForm.get('userDetails.birth').patchValue(new Date().toLocaleDateString())

console.log(new Date().toLocaleDateString());


    //   this.service.getUser(id).subscribe(user => {this.user = user
    //   this.updateDetails(this.user);
    //  // alert(JSON.stringify(user));
    //   });       
}

// setDefaultValues(){
//  this.AddUserForm.patchValue({userName: 'Renzen', gender:'male', lastName:'Florendo'});
// }	


createUser(){
  this.AddUserForm = this._fb.group({
    id: [''],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    cfpassword: ['', Validators.required],
    status: ['', Validators.required],
    userDetails: this.initDetails()
    });
}


initDetails(){
  return this._fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['',Validators.required],
    birth: ['',Validators.required],
    phone: ['',Validators.required],
    website: ['',Validators.required],
    address: this.initAddress(),
 });
}
    
  initAddress() {
  return this._fb.group({
    street: ['', Validators.required],
    suite: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', Validators.required],
    geoLoc: this.initGeo()
  });
}

 initGeo() {
  return this._fb.group({
    lat: ['', Validators.required],
    lng: ['', Validators.required],
  })
}


  // convenience getter for easy access to form fields
  get i() { return this.AddUserForm.controls; }
 

// get userName() {
//   return this.AddUserForm.get('userName');
// }

// get password() {
//   return this.AddUserForm.get('password');
// }

// get cfpassword() {
//   return this.AddUserForm.get('cfpassword');
// }

// get status() {
//   return this.AddUserForm.get('status');
// }

get firstName() {
  return this.AddUserForm.get('userDetails.firstName');
}

get lastName() {
  return this.AddUserForm.get('userDetails.lastName');
}

get email() {
  return this.AddUserForm.get('userDetails.email');
}

get gender() {
  return this.AddUserForm.get('userDetails.gender');
}

get birth() {
  return this.AddUserForm.get('userDetails.birth');
}

get phone() {
  return this.AddUserForm.get('userDetails.phone');
}
get website() {
  return this.AddUserForm.get('userDetails.website');
}

get street() {
  return this.AddUserForm.get('userDetails.address.street');
}

get suite() {
  return this.AddUserForm.get('userDetails.address.suite');
}

get city() {
  return this.AddUserForm.get('userDetails.address.city');
}

get zipCode() {
  return this.AddUserForm.get('userDetails.address.zipCode');
}

get lat() {
  return this.AddUserForm.get('userDetails.address.geoLoc.lat');
}

get lng() {
  return this.AddUserForm.get('userDetails.address.geoLoc.lng');
}


AddUsers() {
this.submitted = true;

// if (this.AddUserForm.invalid) {
//     return;
// }

alert('test');
this.service.AddUser(this.AddUserForm.value)
.subscribe(s=> console.log(s));
console.log(this.AddUserForm.value)
// .pipe(first())
// .subscribe(
//     data => {
//         window.alert('Registration successful');
//         this.router.navigate(['/support']);
//     },
//     error => {
//       window.alert(error);
//     });
//     // .subscribe(s=> console.log(s));
  
}





}
