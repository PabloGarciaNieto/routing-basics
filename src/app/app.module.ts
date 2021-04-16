import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorDetailComponent } from './color-detail/color-detail.component';
import { ColorsInfoService } from './colors-info.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorsComponent,
    ColorDetailComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [ ColorsInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
