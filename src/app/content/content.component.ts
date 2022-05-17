import { Component, OnInit } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
