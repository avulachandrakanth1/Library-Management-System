import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private router:Router) { }
token=localStorage.getItem('token')
isAuthenticated=false;
  isLogedIn(token){
    if(token != '' && token != null){
      let role:any=localStorage.getItem('role');
      if(role == 1){
        this.isAuthenticated=true;
        this.router.navigateByUrl('/admin-home')
      
      }
      else if(role==2){
        this.isAuthenticated=true;
        this.router.navigateByUrl('/user');   
      }
    }
  }
  isLogedOut(){
    console.log("loged out authservice")
    localStorage.clear();
    window.location.href='loginHome'


  }

//   userLogIn(role){
//     if(role == 2){
//       this.isAuthenticated=true;
//       this.router.navigateByUrl('/user-home');
//     }

//   }
}
