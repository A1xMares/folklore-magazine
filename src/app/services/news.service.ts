import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private tempApi = 'http://api.mediastack.com/v1/news?access_key=ddc17c151361e25b95bc0058f8507018&countries=mx&languages=es&sort=popularity';

  constructor(
    private http: HttpClient
  ) { }

  // Add a new data object //
  getLastNews() {
    return this.http.get(this.tempApi);
  }

}
