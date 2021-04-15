import { Component, OnInit, Input } from '@angular/core';
import { ColorsInfoService } from './../colors-info.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.scss']
})
export class ColorDetailComponent implements OnInit {
color;
  constructor(private cs: ColorsInfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    //TODO imprime newName por consola y su type of
/*     this.color = this.route.paramMap.pipe(
      switchMap(params => {
        const newName = params.get('name');
        let newColor = this.cs.colorsArray.find(e => e.name === newName);
        return newColor;
      })
    ) */
  }

}
