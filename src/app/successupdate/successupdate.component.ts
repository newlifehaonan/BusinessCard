import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-successupdate',
  templateUrl: './successupdate.component.html',
  styleUrls: ['./successupdate.component.scss']
})
export class SuccessupdateComponent implements OnInit {

  constructor(private route: Router) {}

  ngOnInit() {
  }

  toDashborad() {
    this.route.navigate(['landingpage/dashboard']);
  }
}
