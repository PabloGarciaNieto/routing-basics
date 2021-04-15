import { ColorsComponent } from './colors/colors.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorDetailComponent } from './color-detail/color-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'colors', component: ColorsComponent,
children: [
  { path: ':name', component: ColorDetailComponent }
] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
