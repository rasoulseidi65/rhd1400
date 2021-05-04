import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public userData: any;
  public userToken: any;
  public userJson: any;
  public userType: any;

  constructor(private router:Router) {

  }

  saveCurrentUser(data: any) {
    localStorage.setItem('currentUserHD', data);
  }

  getCurrentUser(): boolean {
    this.userData = localStorage.getItem('currentUserHD');
    console.log(this.userData)
    this.userJson = JSON.parse(this.userData);
    if (this.userData !== undefined && this.userData !== null) {
      this.userJson = JSON.parse(this.userData);
      return true;
    } else {
      return false;
    }
  }

  removeCurrentUser(): void {
    localStorage.removeItem('currentUserHD');
    this.router.navigate(['/']);

  }
}
