import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {GifResponse} from "../../models/gif-response";
import {Gif} from "../../models/gif";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  searchURL = 'https://api.giphy.com/v1/gifs/search?api_key=ROp0DXBgxY0w1FmjU0MNXo5nAlZHAVd8&q=';
  trendingURL = 'https://api.giphy.com/v1/gifs/trending?api_key=ROp0DXBgxY0w1FmjU0MNXo5nAlZHAVd8';
  xhr = new XMLHttpRequest();
  url : String|undefined;

  constructor(private http : HttpClient) { }

  search(value : string): Observable<GifResponse>{
    const url = `${this.searchURL}${value}`;
    return this.http.get<GifResponse>(url);
  }
}
