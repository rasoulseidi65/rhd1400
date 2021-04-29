import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  private userType;

  constructor(private localstorage: LocalStorageService,
              private router: Router
  ) {


  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.localstorage.getCurrentUser();
    this.userType = this.localstorage.userJson['type'];
    if ((this.userType === 'user') || (this.userType === 'teacher')) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

}
