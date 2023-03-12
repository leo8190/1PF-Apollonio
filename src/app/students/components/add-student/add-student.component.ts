import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/students/service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent {
  addStudentForm: FormGroup;

  constructor(private studentService: StudentService) {
    let emailRegex: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let onlyNumbersRegex: string = "^[0-9]*$";
    let onlyLettersAndSpaces: string = "^[a-zA-Z ]+$";
    let controls: any = {
      name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(onlyLettersAndSpaces)]),
      surname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(onlyLettersAndSpaces)]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
      documentNumber: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(onlyNumbersRegex)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern(onlyNumbersRegex)]),
      isActive: new FormControl(true)
    }
    this.addStudentForm = new FormGroup(controls);
  }

  registerStudent() {
    if (this.addStudentForm.controls['name'].valid && this.addStudentForm.controls['surname'].valid
      && this.addStudentForm.controls['email'].valid && this.addStudentForm.controls['documentNumber'].valid
      && this.addStudentForm.controls['phoneNumber'].valid) {
      this.studentService.addStudent(this.addStudentForm.getRawValue());
      this.addStudentForm.reset();
    }
    else {
      alert("There are problems with some of the fields");
    }
  }
}
