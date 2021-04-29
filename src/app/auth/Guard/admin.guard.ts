import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private userType;

  constructor(private localstorage: LocalStorageService,
              private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localstorage.getCurrentUser() === true) {
      this.userType = this.localstorage.userJson['type'];
      if (this.userType === 'admin') {
        return true;
      } else {
        this.router.navigate(['/auth/login-admin']);
        return false;
      }
    }
  }

}
