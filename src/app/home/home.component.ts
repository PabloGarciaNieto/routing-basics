import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  clickHandle() {
    const confirm = prompt('Enter yes, if you want to go there');
    if (confirm === 'yes') {
      this.router.navigate(['colors']);
    }
  }
  guardProtection() {
    this.router.navigate(['admin']);
  }

}
