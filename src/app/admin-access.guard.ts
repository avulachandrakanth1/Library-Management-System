import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './auth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {
  constructor(private authservice:AuthserviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      console.log("it works")
      console.log("working dont woorry")
    // return true;
    let adminData=this.authservice.isLogedIn
    if(adminData){
      return true
     }
     alert('hi');
     this.router.navigateByUrl('/loginHome')
     return false;
   }
  //   if(adminData){
  //    return this.authservice.isAuthenticated
  //   }
  //   alert('hi');
  //   this.router.navigateByUrl('/loginHome')
  //   return false;
  // }
  
}
