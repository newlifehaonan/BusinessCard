import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {Profile} from '../models/profile';
import { Log} from  '../models/log';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  status: boolean;
  email: string;
  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.status = false;
    this.email = 'User';
  }

  createUser(email: string, pw: string) {
    this.auth.auth.createUserWithEmailAndPassword(email, pw)
      .then(
        (newUser) => {
          console.log('new user created!');
          const time = firebase.database.ServerValue.TIMESTAMP;
          const system_time = new Date().toLocaleTimeString();
          this.status = true;
          this.email = email;
          // set up user profile
          const profile: Profile = new Profile();
          profile.email = email;
          // set up create profile acticity
          const log: Log = new Log();
          log.activity = 'user created';
          log.time = time;
          const payload: any = {};
          payload[`${newUser.user.uid}/profile`] = profile;
          payload[`${newUser.user.uid}/activity/${system_time}`] = log;

          this.router.navigate(['landingpage/dashboard']);
          return this.db.database.ref().update(payload);
        })
      .catch(
        (error) => {
          console.log('email already exist!');
        });
  }

  signInUser(email: string, pw: string) {
    this.auth.auth.signInWithEmailAndPassword(email, pw)
      .then(
        (auth) => {
          console.log('user sign in success!');
          const time = firebase.database.ServerValue.TIMESTAMP;
          const system_time = new Date().toLocaleTimeString();
          this.status = true;
          this.email = email;

          // setting the log
          const log = new Log();
          log.activity = 'user sign in';
          log.time = time;

          this.router.navigate(['landingpage/dashboard']);
          // push activity to database
          return this.db.database.ref(`${auth.user.uid}/activity`).push(log);
        })
      .catch(
        (error) => {
          console.log('email or pw is not correct');
        });
  }

  logout(): any {
    this.auth.auth.signOut();
    this.email = 'User';
    this.status = false;
  }

  isLoggedIn(): boolean {
    return this.status;
  }

}
