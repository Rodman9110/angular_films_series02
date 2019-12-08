import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() genres;
  @Output() search = new EventEmitter<any>();
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  searchForm = this.formBuilder.group({
    genres: []
  })

}
