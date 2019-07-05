import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user:string;
  constructor( private router:Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('username');
    if(this.user== null){
      this.router.navigate(['/login']);
      // this.router.navigate(['/']);
    }
  }
  Logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
