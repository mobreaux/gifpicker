import { Component, OnInit, Input } from '@angular/core';
import {Gif} from "../../models/gif";

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  //@Input() results: Gif[]|undefined;
  @Input() results: string[]|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
