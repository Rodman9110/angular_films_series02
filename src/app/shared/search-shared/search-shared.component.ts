import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-shared',
  templateUrl: './search-shared.component.html',
  styleUrls: ['./search-shared.component.css']
})
export class SearchSharedComponent implements OnInit {

  public searchSharedForm: FormGroup;
  @Output() search = new EventEmitter<any>();
  constructor(private formBuilder:FormBuilder) {

    this.searchSharedForm = this.formBuilder.group({
      name :['',Validators.required]
    });

   }

  ngOnInit() {
  }

  getSearchFilmForName(){   
    this.search.emit(this.searchSharedForm.value);   
  }

}
