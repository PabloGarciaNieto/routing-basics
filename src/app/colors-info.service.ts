import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColorsInfoService {
  colorsArray = [
    { name: 'Red' },
    { name: 'Orange' },
    { name: 'Yellow' },
    { name: 'Pink' }
  ];
/*   public colorsArray = new BehaviorSubject<any[]>(
    [
      { name: 'Red' },
      { name: 'Orange' },
      { name: 'Yellow' },
      { name: 'Pink' }
    ]);
  colors = this.colorsArray.asObservable();

  setColors(newInfo: any[]) {
    this.colorsArray.next(newInfo);
  } */
}
