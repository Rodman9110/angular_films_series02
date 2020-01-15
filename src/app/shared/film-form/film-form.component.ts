import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
interface Post {
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  post: Post = {
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now())
  }
  
  @Input() countries: any[];
  @Input() genres:any[];
  @Input() classification:any[];
  @Output() filmEmit = new EventEmitter<any>();
  public filmForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder ) {
    this.filmForm = this.formBuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],
      date_film:['', Validators.required],
      id_genres:['', Validators.required],
      id_country:['', Validators.required], 
      poster_film:['', Validators.required],
      id_classification:['', Validators.required],
      trailer:['', Validators.required],
     });

   }

  ngOnInit() {
  }


  ClickSaveFilm(){
    console.log(this.filmForm.value);
    this.filmEmit.emit(this.filmForm.value);
    // this.filmForm.reset();
  }

}
