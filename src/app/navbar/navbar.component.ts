import {AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isLogin: Boolean;
  userCredential = 'User';
  constructor(private router: Router, private auth: AuthService) {
    console.log('constructor called!');
    this.isLogin = this.auth.status;
    this.userCredential = this.auth.email;
  }

  ngOnInit() {
    console.log('Oninit Called');
  }
  SignIn() {
    this.router.navigate(['auth']);
  }
  SignOut() {
    this.auth.logout();
    this.isLogin = false;
    this.userCredential = 'User';
  }
}
