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
  name;
  color;
  constructor(private cs: ColorsInfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.push(this.route.paramMap.pipe(
      switchMap((params) =>
       of(params.get('name'))
      )
    ).subscribe(d => {
      this.name = d;
      this.color = this.cs.colorsArray.find(e => e.name === this.name);
      if (this.color === undefined) {
        this.color = '';
        this.name = '';
      }
    }));
  console.log(typeof this.name);
  console.log(this.name);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
