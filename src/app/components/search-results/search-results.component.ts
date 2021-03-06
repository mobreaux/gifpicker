import { Component, OnInit, Input } from '@angular/core';
import { Gif } from 'src/app/models/search-results/search-results.model';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  //@Input() results: Gif[]|undefined;
  @Input() results: string[]|undefined;
  text : string = "Copy"
  constructor() { }

  ngOnInit(): void {
  }

  copy(value : string) {
    navigator.clipboard.writeText(value);
    this.text = "Copied!"
    setTimeout(() => {
      this.text = "Copy"
    }, 1000)
  }

}
