import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Users } from '../model/shared/user.model';
import { ActivatedRoute } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { Router } from '@angular/router';


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

  constructor( private service: DataService , private route: ActivatedRoute, private _fb: FormBuilder, private datepipe: DatePipe  ) { 
  
  }

 
ngOnInit() {
        
}

 
onSubmit() {
    
}

addDetails() {
 
}

}
