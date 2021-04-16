import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of} from 'rxjs';
import { ColorsInfoService } from './colors-info.service'
import {  Subscription } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {
  //constructor(private cs: ColorsInfoService)
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any> {
    let color;
   const name = next.paramMap.get('name');

   return  of(name)
  }

}
