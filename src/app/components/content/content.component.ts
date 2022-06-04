import { Component, OnInit } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Observable } from 'rxjs';
import { GiphyService } from '../../services/giphy-service/giphy.service';
import {Gif} from "../../models/gif";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  faSearch = faSearch;
  searchCriteria!: string;
  //results: Gif[]|undefined;
  results: string[] | undefined;
  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
  }

  search(value: any){
    this.giphyService.search(this.searchCriteria).subscribe(result => {
      //this.results = result?.data;
      let urlstr = [];
      for (var i = 0; i<result?.data.length; i++) {
        console.log(result?.data[i]);
        // @ts-ignore
        urlstr.push(result?.data[i].images.original.url);
      }
      this.results = urlstr;
    });
  }

}
