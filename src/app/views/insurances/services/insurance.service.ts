import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  baseUrl:string = environment.baseUrl;

  constructor(public http:HttpClient) { }

  GetList(){
    return this.http.get(this.baseUrl+'/user/get-all-insurances')
    .pipe(
     map(data => {return data}),
     catchError((error: any)=> {return throwError(error)})
    )
  }
}
