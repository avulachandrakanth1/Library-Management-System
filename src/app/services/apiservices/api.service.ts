import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 constructor(
  private httpclient:HttpClient,
  private router:Router
  ) { }

  get(url,headers){
    return this.httpclient.get(url,headers)
  }
  post(url,body){
    return this.httpclient.post(url,body)
  }
  add(url,body,headers){
    return this.httpclient.post(url,body,headers)
  }
}
