import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-film-actor-form',
  templateUrl: './film-actor-form.component.html',
  styleUrls: ['./film-actor-form.component.css']
})
export class FilmActorFormComponent implements OnInit {

  @Input() actors: any[];
  @Input() films:any[];
  @Output() filmActorEmit = new EventEmitter<any>();
  public filmActorForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
    ) {
      this.filmActorForm = this.formBuilder.group({
        id_film:[],
        id_actor:[]
      })
     }

  ngOnInit() {
  }

  ClickSaveFilmActor(){
    console.log(this.filmActorForm.value);
    this.filmActorEmit.emit(this.filmActorForm.value);
    this.filmActorForm.reset();
  }

}
