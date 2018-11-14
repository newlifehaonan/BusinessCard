import { Component, OnInit } from '@angular/core';
import {DbService} from '../services/db.service';
import {Profile} from '../models/profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  constructor(private db: DbService, private route: Router) {
    this.name = '';
    this.email = '';
    this.phone = '';
  }

  ngOnInit() {
  }

  clear() {
    this.name = '';
    this.email = '';
    this.phone = '';
  }

  update() {
    const profile = new Profile();
    profile.nickname = this.name;
    profile.email = this.email;
    profile.phonenumber = this.phone;
    this.route.navigate(['landingpage/successupdate'])
    this.db.updateprofile(profile);
  }
}
