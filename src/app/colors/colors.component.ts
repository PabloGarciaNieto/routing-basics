import { ColorsInfoService } from './../colors-info.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  colors;
  constructor(private cs: ColorsInfoService) { }

  ngOnInit() {
    this.colors = this.cs.colorsArray;
    console.log(this.colors);
    //this.cs.colors.subscribe(data => {this.colors = data});

  }

}
