import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {ValuepassingService} from '../services/valuepassing.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email: string;
  pw: string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.signInUser(this.email, this.pw);
  }
  createUser() {
    this.auth.createUser(this.email, this.pw);
  }
}
