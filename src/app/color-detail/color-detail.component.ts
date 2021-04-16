import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorsInfoService } from './../colors-info.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { of, Subscription } from 'rxjs'
@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.scss']
})
export class ColorDetailComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  color;
  ret;
  constructor(private cs: ColorsInfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.push(this.route.paramMap.pipe(
      switchMap((params) =>
       of(params.get('name'))
      )
    ).subscribe(d => {
      this.color = d;
      this.ret = this.cs.colorsArray.find(e => e.name === this.color);
      if (this.ret === undefined) {
        this.ret = '';
        this.color = '';
      }
    }));
  console.log(typeof this.color);
  console.log(this.color);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
