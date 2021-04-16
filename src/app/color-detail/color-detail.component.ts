import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorsInfoService } from './../colors-info.service';
import { ActivatedRoute } from '@angular/router';
//switchMap and of in case of not use the preload guard
//import { switchMap } from 'rxjs/operators'
import { of, Subscription } from 'rxjs'
@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.scss']
})
export class ColorDetailComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  nameInTheRoute;
  color;
  constructor(private cs: ColorsInfoService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.subscriptions.push(this.route.data.subscribe(data => {
      this.nameInTheRoute = data[0];
      console.log(data);
      this.color = this.cs.colorsArray.find(e => e.name === this.nameInTheRoute);
      if (this.color === undefined) {
        this.color = '';
      }
    }));
/* Without the preload guard we use this code. The cool thing of the preload guard is to pass the value of the params to different components.
    this.subscriptions.push(this.route.paramMap.pipe(
      switchMap((params) =>
       of(params.get('name'))
      )
    ).subscribe(data => {
      this.nameInTheRoute = data;
      this.color = this.cs.colorsArray.find(e => e.name === this.nameInTheRoute);
      if (this.color === undefined) {
        this.color = '';
      }
    })); */
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
