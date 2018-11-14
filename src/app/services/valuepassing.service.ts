import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Businesscard} from '../models/businesscard';

@Injectable()
export class ValuepassingService {
  cardinfo: BehaviorSubject<Businesscard>;

  constructor() {
    this.cardinfo = new BehaviorSubject<Businesscard>(null);
  }
  addcard(cardinfo: Businesscard) {
    console.log('this is from value passing');
    console.log(cardinfo);
    this.cardinfo.next(cardinfo);
  }
}
