import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscription } from 'src/app/inscriptions/model/inscription.model';
import { InscriptionService } from '../../service/inscription.service';

@Component({
  selector: 'app-edit-inscription-dialog',
  templateUrl: './edit-inscription-dialog.component.html',
  styleUrls: ['./edit-inscription-dialog.component.css']
})
export class EditInscriptionDialogComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditInscriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscription,
    private inscriptionService: InscriptionService
  ) {
    this.form = new FormGroup({
      id: new FormControl(data.id),
      studentId: new FormControl(data.studentId),
      courseId: new FormControl(data.courseId)
    });
  }

  public closeModal() {
    this.dialogRef.close();
  }

  saveChanges() {
    this.inscriptionService.saveChanges(this.form.getRawValue());
  }
}


