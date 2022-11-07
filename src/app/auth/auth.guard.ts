import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { SharedataService } from '../service/sharedata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loginuser:any
 
  constructor(private shardata:SharedataService,private route:Router){
    this.shardata.crntmsg.subscribe(username => {
      
      this.loginuser = localStorage.getItem('username')
    
   
})
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
return this.shardata.crntmsg.pipe(
  take(1),
 
  map(user=>{
  if(localStorage.getItem('username')){
  
  
    
      return this.loginuser
    
      
    
  }
  return this.route.createUrlTree([''])
    
  })
)
    
  }
  
}
