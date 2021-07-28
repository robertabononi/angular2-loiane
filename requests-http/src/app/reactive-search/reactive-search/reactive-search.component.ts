import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.css']
})
export class ReactiveSearchComponent implements OnInit {

  queryField = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.queryField.value)
  }

}
