import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map , catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Operations } from '../../../operations';


@Injectable({
  providedIn: 'root'
})
export class UserService extends Operations {

  constructor(public http:HttpClient) { 
    super();
  }
  baseUrl: string = environment.baseUrl;

  login(data){
    return this.http.post(this.baseUrl+'/admin/login' ,data)
    .pipe(
     map(data => {return data}),
     catchError((error: any)=> {return throwError(error)})
    )
  }
}
