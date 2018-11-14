import { Component, OnInit } from '@angular/core';
import {DbService} from '../services/db.service';
import {Log} from '../models/log';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  spinnershows = true;
  log: Log[];
  constructor(private db: DbService) {
    this.db.gethistory()
      .subscribe(
        value => {
          const history = [];
          for (const prop in value) {
            if (value.hasOwnProperty(prop)) {
              history.push(value[prop]);
            }
          }
          console.log(history);
          this.log = history;
          this.spinnershows = false;
        }
      );
  }

  ngOnInit() {
  }

}
