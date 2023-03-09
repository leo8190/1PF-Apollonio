import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../courses/service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  addCourseForm: FormGroup;

  constructor(private courseService: CourseService) {     
    let controls: any = {
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      duration: new FormControl('', [Validators.required]),      
      isActive: new FormControl(true)
    }
    this.addCourseForm = new FormGroup(controls);
  }

  addCourse(){
    if(this.addCourseForm.controls['name'].valid && this.addCourseForm.controls['description'].valid 
        && this.addCourseForm.controls['duration'].valid){
      this.courseService.addCourse(this.addCourseForm.getRawValue());
      this.addCourseForm.reset();      
    }   
    else{
      alert("There are problems with some of the fields");
    } 
  }
}

