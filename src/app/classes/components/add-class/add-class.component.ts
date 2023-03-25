import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../classes/service/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {
  addClassForm: FormGroup;

  constructor(private classService: ClassService) {
    let controls: any = {
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      isActive: new FormControl(true)
    }
    this.addClassForm = new FormGroup(controls);
  }

  addClass() {
    if (this.addClassForm.controls['name'].valid && this.addClassForm.controls['description'].valid
      && this.addClassForm.controls['duration'].valid) {
      this.classService.addClass(this.addClassForm.getRawValue());
      this.addClassForm.reset();
    }
    else {
      alert("There are problems with some of the fields");
    }
  }
}

