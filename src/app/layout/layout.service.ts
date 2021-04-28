import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../Core/LayoutAdmin/teacher/teacher.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }
  listCourse(){
    return this.http.get('http://api.hd724.com/api/v1/users/course');
  }
  listNewCourse(){
    return this.http.get('http://api.hd724.com/api/v1/users/newCourse');
  }
  listViewMaxCourse(){
    return this.http.get('http://api.hd724.com/api/v1/users/viewMaxCourse');
  }
  findCourse(id:any){
    return this.http.post('http://api.hd724.com/api/v1/users/courseFind',id);
  }
  listArticle(){
    return this.http.get('http://api.hd724.com/api/v1/users/article');
  }
  findArticle(id:any){
    return this.http.get('http://api.hd724.com/api/v1/users/findArticle/'+id);
  }
  newestArticle(){
    return this.http.get('http://api.hd724.com/api/v1/users/newest');
  }
  newComment(data: any) {
    return this.http.post('http://api.hd724.com/api/v1/users/comment',data);
  }
  getQuestion() {
    return this.http.get('http://api.hd724.com/api/v1/admin/question');
  }
  uploadFile(image:any) {
    return this.http.post('http://api.hd724.com/api/v1/users/image', image);
  }
  register(data: any): Observable<Teacher[]> {
    return this.http.post<Teacher[]>('http://api.hd724.com/api/v1/users/register', data);
  }
  onPayment(data: any): any {
    return this.http.post('http://api.hd724.com/api/v1/users/payment', data);
  }
  findByMajorIDQuestion(data: any): any {
    return this.http.post('http://api.hd724.com/api/v1/admin/findByMajorIDQuestion', data);
  }
  findByMajorIDHandout(data: any): any {
    return this.http.post('http://api.hd724.com/api/v1/admin/findByMajorIDHandout', data);
  }
  updateViewCountArticle(data: any): any {
    return this.http.put('http://api.hd724.com/api/v1/users/viewCount', data);
  }
  updateViewCountCourse(data: any): any {
    return this.http.put('http://api.hd724.com/api/v1/users/viewCountCourse', data);
  }
  findQuestion(id) {
    return this.http.get('http://api.hd724.com/api/v1/admin/question/'+ id);
  }
  findHandout(id) {
    return this.http.get('http://api.hd724.com/api/v1/admin/handout/'+ id);
  }
}
