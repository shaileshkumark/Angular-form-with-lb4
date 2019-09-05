import { Component, OnInit } from '@angular/core';
import { UsersService } from  '../users.service';
import { Countries } from '../countrylist'


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  
  countries=Countries;
  emailid : string;
  phonenumber : number;
  company : string;
  country: string;
  insurance : any;
  dob : Date;
  gender : string;
  network : string;

  constructor(private service : UsersService) { }
  users={};

  ngOnInit(): void {
    this.service.getAllUser()
     .subscribe(data => this.users = data)
    
  }
  addUser(){
    this.service.postUserDetailas({
      "email_id":this.emailid,
      "mobile_no":this.phonenumber,
      "company": this.company,
      "country" : this.country,
      "gender": this.gender,
      "DOB": this.dob,
      "insurance": this.insurance,
      "network": this.network,

    }).subscribe(data=>{
      // console.log(data);
    
      this.getAllUsers();
    })
    
  }
  getAllUsers(){
    this.service.getAllUser()
        .subscribe(data => {this.users = data
          // console.log(data);

          
        })
  }  

  
}
