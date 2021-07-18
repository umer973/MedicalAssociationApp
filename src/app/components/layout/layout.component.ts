import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  loggedUser: any;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngAfterContentInit(): void {

  }
  ngOnInit(): void {
    this.loggedUser = this.route.snapshot.queryParamMap.get('user');
    console.log(this.loggedUser);
  }

  logout() {

    localStorage.setItem('IsLoggedIn', 'false');
    this.router.navigate(['/login']);
     
    //localStorage.removeItem('IsLoggedIn');

  }

}
