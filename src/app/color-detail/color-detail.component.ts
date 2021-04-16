import { Component, OnInit, Input } from '@angular/core';
import { ColorsInfoService } from './../colors-info.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.scss']
})
export class ColorDetailComponent implements OnInit {
  color;

  constructor(private cs: ColorsInfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params) =>
       of(params.get('name'))
      )
    ).subscribe(d => this.color = d);
  console.log(typeof this.color);
  console.log(this.color);


  }

}
