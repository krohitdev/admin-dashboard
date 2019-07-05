import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = environment.baseUrl;
  constructor(public http:HttpClient) { }
  
  GetUserInsuranceList(){
    return this.http.get(this.baseUrl+'/user/get-all-user-insurances')
    .pipe(
     map(data => {return data}),
     catchError((error: any)=> {return throwError(error)})
    )
  }


  GetExpireAbleInsurance(){
    //console.log('cakked')
    return this.http.get(this.baseUrl+'/user/notify-insureances')
    .pipe(
      map(data =>{ return data }),
      catchError((error: any)=> {return throwError(error)})
    )
  }
}


   
  

 
