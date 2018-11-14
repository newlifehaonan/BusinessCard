import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DbService} from '../services/db.service';
import {Businesscard} from '../models/businesscard';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations : [
    trigger('divState',
      [
        state('normal', style(
          {
            opacity: 0,
            transform: 'translateX(-100px)'
          })),
        state('showed', style(
          {
            opacity: 1,
            transform: 'translateX(0)'
          }
        )),
        transition('normal <=> showed', animate(300))
      ])
  ]
})

export class DashboardComponent implements OnInit {

  state = 'normal';
  card: Businesscard[];
  activeCard: Businesscard;
  spinnershows = true;
  constructor(private db: DbService, private route: Router) {
    this.db.getAlnum()
      .subscribe(
      value => {
        const card = [];
        for (const prop in value) {
          if (value.hasOwnProperty(prop)) {
            card.push(value[prop]);
            // this.card.next(value);
          }
        }
        console.log(card);
        this.card = card;
        this.activeCard = card[0];
        this.spinnershows = false;
      }
    );
  }
  ngOnInit() {
  }
  onAnimate(index: number) {
    // this need to be changed, bind to index
    this.state === 'normal' ? this.state = 'showed' : this.state = 'normal';
    console.log(`card being active is ${index}`);
    this.activeCard = this.card[index];
  }
  addNewCard() {
    this.route.navigate(['landingpage/camera']);
  }
}
