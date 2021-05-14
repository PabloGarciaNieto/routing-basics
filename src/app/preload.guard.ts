
import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ColorsInfoService } from './colors-info.service';

@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {


  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log(state);
    const name = next.paramMap.get('name');
    const names = ['Red', 'Orange', 'Yellow', 'Pink'];
    if (names.indexOf(name) !== -1) {
      return of(name)
    } else {
     next.url[0].path = '';
     console.log(next);
    }

  }

}
