import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { IUser } from '../user-interface/IUser';
import { IUserData } from '../user-interface/IUserdata';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 detail : IUserData;
  
  emailid : string;
  phonenumber : number;
  company : string;
  country: string;
  insurance : any;
  dob : Date;
  gender : string;
  network : string;


  //Component properties
statusCode: number;
requestProcessing = false;
userIdToUpdate = null;
processValidation = false;
//Create form
userForm = new FormGroup({
email_id: new FormControl('', Validators.required),
mobile_no: new FormControl('', Validators.required),
company: new FormControl('', Validators.required),
country: new FormControl('', Validators.required),
gender: new FormControl('', Validators.required),
DOB: new FormControl('', Validators.required),
insurance: new FormControl('', Validators.required),
network: new FormControl('', Validators.required)
});
//Create constructor to get service instance
constructor(private usersService: UsersService) {
}
users = {};

//Create ngOnInit() and and load users
ngOnInit():
 void {
     //this.getAllUsers();
    this.usersService.getAllUser()
        .subscribe(data => this.users = data)
         
}



//Fetch all users
 
getAllUsers() {
        this.usersService.getAllUser()
         .subscribe(
data => this.users = data,
                errorCode => this.statusCode = errorCode);
                
}

//Perform preliminary processing configurations
preProcessConfigurations() {
this.statusCode = null;
     this.requestProcessing = true;
}


}
