import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  
  searchURL = 'https://api.giphy.com/v1/gifs/search?api_key=ROp0DXBgxY0w1FmjU0MNXo5nAlZHAVd8&q=';
  trendingURL = 'https://api.giphy.com/v1/gifs/trending?api_key=ROp0DXBgxY0w1FmjU0MNXo5nAlZHAVd8';
  xhr = new XMLHttpRequest();
  url : String|undefined;

  constructor(private http : HttpClient) { }

  search(value : string): Observable<JSON[]>{
    const url = `${this.searchURL}${value}`;
    return this.http.get<JSON[]>(url);
  }
}
