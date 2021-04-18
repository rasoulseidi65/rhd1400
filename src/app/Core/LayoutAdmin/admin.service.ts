import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {paper} from './paper/paper.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  postschoole(data:any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/question', data);
  }
  uploadFiles(image:any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/image', image);
  }
  getschoole() {
    return this.http.get('http://api.hd724.com/api/v1/admin/question');
  }
  deleteschoole(schoolID: any) {
    return this.http.delete('http://api.hd724.com/api/v1/admin/question/' + schoolID);
  }
  //مقطع تحصیلی
  postGrade(data:any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/grade', data);
  }
  getGrade() {
    return this.http.get('http://api.hd724.com/api/v1/admin/grade');
  }
  deleteGrade(gradID: any) {
    return this.http.delete('http://api.hd724.com/api/v1/admin/grade/' + gradID);
  }
  postMajor(data:any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/major', data);
  }
  deleteMajor(majorID: any) {
    return this.http.delete('http://api.hd724.com/api/v1/admin/major/' + majorID);
  }
  GetMajor() {
    return this.http.get('http://api.hd724.com/api/v1/admin/major');
  }
  posthandout(data:any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/handout', data);
  }
  gethandout() {
    return this.http.get('http://api.hd724.com/api/v1/admin/handout');
  }
  deletehandout(handID: any) {
    return this.http.delete('http://api.hd724.com/api/v1/admin/handout/' + handID);
  }
}
