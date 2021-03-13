import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private tempApi = 'https://newsapi.org/v2/top-headlines?country=mx&sortBy=popularity&apiKey=e14e5a16b2354eb88a6a04958862f561&pageSize=20&page=2';

  constructor(
    private http: HttpClient
  ) { }

  // Add a new data object //
  getLastNews() {
    return this.http.get(this.tempApi);
  }

}
