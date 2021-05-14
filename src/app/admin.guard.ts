import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (state.url === '/admin') {
        const confirm = prompt('Enter admin password to access(of course the password is admin :)');
        if (confirm === 'admin') {
          return true;
        } else {
          alert('Access denied, only for admin eyes!')
          return false;
        }
      } else {
        console.log(state.url);
      }


  }

}
