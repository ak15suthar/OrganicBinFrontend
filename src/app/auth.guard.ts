import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private rut: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (sessionStorage.getItem('isLogin') == undefined && sessionStorage.getItem('isUserId') == undefined) {
        this.rut.navigate(['/login']);
        return false;
      }
      else if(sessionStorage.getItem('isAdmin') == undefined){
        this.rut.navigate(['/login']);
        return false;
      }
      else {
        return true;
      }
  }

}
