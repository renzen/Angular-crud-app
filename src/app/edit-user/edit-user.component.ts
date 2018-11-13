import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Users } from '../model/shared/user.model';
import { ActivatedRoute } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common'; 



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})


export class EditUserComponent implements OnInit {

  private successMessage: string;
  private errorMessage: string;
  private user: Users;
  private id: Object;
  private FormControl: string;
  usersForm: FormGroup;
  user$: Object;

  constructor( private service: DataService , private route: ActivatedRoute, private _fb: FormBuilder, private datepipe: DatePipe  ) { 
  this.route.params.subscribe( params => this.id = params.id ); 
  }

 
  ngOnInit() {
    this.usersForm = this._fb.group({
        id: [''],
        userName: [''],
        password: [''],
        active: [''],
        userDetails: this.initDetails()
        });

        let id = this.route.snapshot.params['id'];
        this.service.getUser(id).subscribe(user => {this.user = user
          this.updateDetails(this.user);
         // alert(JSON.stringify(user));
          }); 

          
}

  initDetails(){
  return this._fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    gender: [''],
    birth: Date,
    phone: [''],
    website: [''],
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

removeAddress(i){
}



   /*** Update the user */
  updateUser(user:Users) {
    this.successMessage = '';
    this.errorMessage   = '';
   alert(JSON.stringify(user));

   this.service.updateUser(this.id, user)
      .subscribe(s=> console.log(s));
      //   user => {
      //     this.successMessage = 'User was updated.';
      //     console.log('user was updated');
      //   },
      //   err => {
      //     this.errorMessage = err;
      //     console.error(err);
      //   }        
      // );
}

updateDetails(userdata): void {
  this.usersForm.patchValue ({
    id:userdata.id,
    userName:userdata.userName,
    password:userdata.password,
    active:userdata.active,
    birth:userdata.userDetails.birth,
   // birth: this.datepipe.transform(new Date(userdata.userDetails.birth), 'yyyy-MM-dd'),
    userDetails: userdata.userDetails
  
    });

    //alert(new Date(userdata.userDetails.birth), 'yyyy-MM-dd');
  } 

}
