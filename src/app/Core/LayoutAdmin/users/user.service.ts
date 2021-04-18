import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  index(): Observable<User[]> {
    return this.http.get<User[]>('http://api.hd724.com/api/v1/users/index');
  }
}
