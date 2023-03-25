import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../../../inscriptions/service/inscription.service';

@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrls: ['./add-inscription.component.css']
})
export class AddInscriptionComponent {
  addInscriptionForm: FormGroup;

  constructor(private InscriptionService: InscriptionService) {
    let controls: any = {
      studentId: new FormControl("", [Validators.required]),
      classId: new FormControl('', [Validators.required]),
      isActive: new FormControl(true)
    }
    this.addInscriptionForm = new FormGroup(controls);
  }

  addInscription() {
    if (this.addInscriptionForm.controls['studentId'].valid
      && this.addInscriptionForm.controls['classId'].valid) {
      this.InscriptionService.addInscription(this.addInscriptionForm.getRawValue());
      this.addInscriptionForm.reset();
    }
    else {
      alert("There are problems with some of the fields");
    }
  }
}

