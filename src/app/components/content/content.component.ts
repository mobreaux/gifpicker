import { Component, OnInit } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Observable } from 'rxjs';
import { GiphyService } from '../../services/giphy-service/giphy.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  faSearch = faSearch;
  searchCriteria!: string;
  results: JSON[]|undefined;

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
  }

  search(value: any){
    this.giphyService.search(this.searchCriteria).subscribe(result => {
      this.results = result;
    });
  }

}
