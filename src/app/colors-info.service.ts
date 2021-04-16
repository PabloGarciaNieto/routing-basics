import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColorsInfoService {
  colorsArray = [
    { name: 'Red', code: '#ff0000' },
    { name: 'Orange', code: '#ffa500'  },
    { name: 'Yellow', code: '#ffff00'  },
    { name: 'Pink', code: '#ffc0cb'  }
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
