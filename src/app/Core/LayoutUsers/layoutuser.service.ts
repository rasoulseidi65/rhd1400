import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LayoutuserService {

  constructor(private http: HttpClient) { }
  uploadFile(image: any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/image', image);
  }
  uploadVideo(video: any) {
    return this.http.post('http://api.hd724.com/api/v1/admin/video', video);
  }
  registerCourse(data: any) {
    return this.http.post('http://api.hd724.com/api/v1/users/course', data);
  }
  CourseUser(data:any) {
    return this.http.post('http://api.hd724.com/api/v1/users/courseUser',data);
  }
  UpdateUser(data: any, id: any){
    return this.http.put('http://api.hd724.com/api/v1/users/updateUser/' +id , data);
  }
}
