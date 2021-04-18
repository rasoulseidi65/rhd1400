import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Image} from './Image.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  getImages() {
    return this.http.get<any>('/assets/json/photos.json', {observe: 'body'})
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
  }
}
