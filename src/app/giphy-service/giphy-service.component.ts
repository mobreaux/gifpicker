import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy-service',
  templateUrl: './giphy-service.component.html',
  styleUrls: ['./giphy-service.component.css']
})
export class GiphyServiceComponent implements OnInit {

  searchURL = 'api.giphy.com/v1/gifs/search?api_key=ROp0DXBgxY0w1FmjU0MNXo5nAlZHAVd8';
  trendingURL = 'api.giphy.com/v1/gifs/trending?api_key=ROp0DXBgxY0w1FmjU0MNXo5nAlZHAVd8';
  constructor() { }

  ngOnInit(): void {
  }

}
