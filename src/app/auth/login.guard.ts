import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';

import { Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class LoggedInGard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const isLoggedIn = this.authService.isLoggedIn();
    console.log('canActivate', isLoggedIn);
    if (!isLoggedIn) {
      this.route.navigate(['landingpage/protector']);
    }
    return isLoggedIn;
  }
}
