import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from './teacher.model';
import {Users} from '../../../auth/Users.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  index(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('http://api.hd724.com/api/v1/teacher/index');
  }
  uploadFile(image:any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/image', image);
  }
  register(data: any): Observable<Teacher[]> {
    return this.http.post<Teacher[]>('http://api.hd724.com/api/v1/teacher/register', data);
  }
}
