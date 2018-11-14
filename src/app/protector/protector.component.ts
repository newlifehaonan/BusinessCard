import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-protector',
  templateUrl: './protector.component.html',
  styleUrls: ['./protector.component.scss']
})
export class ProtectorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toAuth(){
    this.router.navigate(['auth']);
  }

}
