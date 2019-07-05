import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map , catchError} from 'rxjs/operators'
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  baseUrl: string = 'http://localhost:8585/api/admin/login';

  login(data){    
    return this.http.post(this.baseUrl ,data)
    .pipe(
     map(data => {return data}),
     catchError((error: any)=> {return throwError(error)})
    )
  }
}
