import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable, of} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import {Businesscard} from '../models/businesscard';
import {Log} from '../models/log';
import * as firebase from 'firebase';
import {Profile} from '../models/profile';

@Injectable()
export class DbService {

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {}

  addAlbum(card: Businesscard) {
    const currentuser = this.afAuth.auth.currentUser.uid;
    const log = new Log();
    log.time = firebase.database.ServerValue.TIMESTAMP;
    log.activity = 'new card created!';
    this.db.database.ref(`${currentuser}/activity`).push(log);
    return this.db.database.ref(`${currentuser}/album`).push(card);
  }

  getAlnum() {
    const currentuser = this.afAuth.auth.currentUser.uid;
    const record = this.db.object(`${currentuser}/album`).snapshotChanges();
    return record.switchMap(
      (value) => {
        return of(value.payload.val());
      });
  }

  gethistory() {
    const currentuser = this.afAuth.auth.currentUser.uid;
    const record = this.db.object(`${currentuser}/activity`).snapshotChanges();
    return record.switchMap(
      (value) => {
        return of(value.payload.val());
      });
  }

  updateprofile(profile: Profile) {
    const currentuser = this.afAuth.auth.currentUser.uid;
    this.afAuth.auth.currentUser.updateEmail(profile.email);
    this.afAuth.auth.currentUser.updateProfile(
      {
      displayName: profile.nickname,
      photoURL: null
    });

    const log = new Log();
    log.activity = 'user update profile';
    log.time = firebase.database.ServerValue.TIMESTAMP;
    this.db.database.ref(`${currentuser}/activity`).push(log);
    return this.db.database.ref(`${currentuser}/profile`).update(profile);
  }
}
