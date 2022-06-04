import { Component, OnInit } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Observable } from 'rxjs';
import { GiphyService } from '../../services/giphy-service/giphy.service';
import { Gif } from 'src/app/models/search-results/search-results.model';;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  faSearch = faSearch;
  searchCriteria!: string;
  results: string[] | undefined;
  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    const urlstr: any[] | undefined = [];
    for (var i = 0; i<3; i++) {
      this.giphyService.random().subscribe(result => {
          // @ts-ignore
          urlstr.push(result?.data.images.original_mp4.mp4);
      });
    }
    this.results = urlstr;
  }

  search(value: any){
    this.giphyService.search(this.searchCriteria).subscribe(result => {
      let urlstr = [];
      for (var i = 0; i<result?.data.length; i++) {
        console.log(result?.data[i]);
        // @ts-ignore
        urlstr.push(result?.data[i].images.original_mp4.mp4);
      }
      this.results = urlstr;
    });
  }

}
