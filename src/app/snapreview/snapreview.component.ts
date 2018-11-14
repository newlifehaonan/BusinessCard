import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValuepassingService} from '../services/valuepassing.service';
import {Subject, Subscription} from 'rxjs';
import {Businesscard} from '../models/businesscard';
import {DbService} from '../services/db.service';

@Component({
  selector: 'app-snapreview',
  templateUrl: './snapreview.component.html',
  styleUrls: ['./snapreview.component.scss']
})
export class SnapreviewComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  businesscard: Businesscard;

  constructor(private router: Router, private transit: ValuepassingService, private db: DbService) {
    // this.card = this.transit.cardinfo;
  }


  ngOnInit() {
    this.subscription = this.transit.cardinfo.subscribe(
      value => {
        this.businesscard = value;
      }
    );
  }

  recap() {
    this.router.navigate(['landingpage/camera']);
  }

  addToAlbum() {
    this.router.navigate(['landingpage/dashboard']);
    return this.db.addAlbum(this.businesscard);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
