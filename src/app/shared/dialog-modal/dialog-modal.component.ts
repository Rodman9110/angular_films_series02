import { Component, OnInit,Inject,Output,EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FilmInterface } from 'src/app/Models/Film';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  public filmFormEdit: FormGroup;
  public filmFormNew : FormGroup
  @Output() filmEmitEdit = new EventEmitter<any>();
  @Output() filmEmitNew = new EventEmitter<any>();

  dialogDelete = false

  formEditDelete = 
      this.formBuilder.group({
        name:[this.data.name,Validators.required],
        description:[this.data.description,Validators.required],
      });

  
   


  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilmInterface,
    private formBuilder: FormBuilder
    ) {

      this.filmFormNew = this.formBuilder.group({
        name:["",Validators.required],
        description:["",Validators.required],
      });
      
      this.filmFormEdit = this.formBuilder.group({
        id:[data.id,Validators.required],
        name:[data.name,Validators.required],
        description:[data.description,Validators.required],
      });
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
