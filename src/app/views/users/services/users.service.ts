import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.baseUrl;

  constructor(public http:HttpClient) { }

  GetAllUsers(){
    return this.http.get(this.baseUrl+'/user/get-all-user')
    .pipe(
      map(data => {return data}),
      catchError((error:any)=>  {return throwError(error)})
    )
  }
}
