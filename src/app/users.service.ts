import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from './user-interface/IUser';
import { IUserData } from './user-interface/IUserdata'
import { map, find, toArray } from 'rxjs/operators';
// import { DatePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})

export class UsersService {

  //URL for create and get options operations
  usersUrl = "http://[::1]:3000";
  //Create constructor to get Http instance
  constructor(private http: HttpClient) {
  }


  postUserDetailas(body) {
    return this.http.post(this.usersUrl + '/userdetails', body);
  }
  getAllUser(): Observable<IUserData> {
    return this.http.get<IUser>(this.usersUrl + "/userdetails").pipe(
      map(user => this.transformToIUser(user))
    )
  }
  //  transformDate(dob) {
  //   return this.datePipe.transform(dob, 'yyyy-MM-dd');
  // }

  private transformToIUser(user: IUser): IUserData {


      return {

        userId: user.user_id,
        emailId: user.email_id,
        mobileNo: user.mobile_no,
        company: user.company,
        country: user.country,
        gender: user.gender,
        dob: user.DOB,
        Insurance: user.insurance,
        network: user.network

      }
    }
}

