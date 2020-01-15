import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Post {
  startDate: Date;
  endDate: Date;
}
@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent implements OnInit {

  post: Post = {
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now())
  }

  @Input() countries: any[];
  @Output() actorEmit = new EventEmitter<any>();
  public actorForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.actorForm = this.formBuilder.group({
      name:['',Validators.required],
      details:['',Validators.required],
      date_actor:['', Validators.required],
      id_country:['', Validators.required], 
      img_profile:['',Validators.required],
     });
   }

  ngOnInit() {
  }

  ClickSaveActor(){
    console.log(this.actorForm.value);
    this.actorEmit.emit(this.actorForm.value);
    this.actorForm.reset();
  }

}
