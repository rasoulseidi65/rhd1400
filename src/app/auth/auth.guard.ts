import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from './Users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public currentUserAdmin: string;

  constructor(private router: Router, private userService: UsersService) {
console.log(localStorage.getItem(userService.token))
    this.currentUserAdmin =localStorage.getItem(userService.token);
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if ((localStorage.getItem(this.userService.token) === null) ||
      (localStorage.getItem(this.userService.token) === undefined)) {
      console.log('not login')
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      // console.log('login')
      // this.router.navigate(['/admin/panel']);
      return true;
    }

  }
}
