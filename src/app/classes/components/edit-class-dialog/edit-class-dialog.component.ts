import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Class } from 'src/app/classes/model/class.model';
import { Course } from 'src/app/courses/model/course.model';
import { ClassService } from '../../../classes/service/class.service';
import { CourseService } from '../../../courses/service/course.service';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-class-dialog',
  templateUrl: './edit-class-dialog.component.html',
  styleUrls: ['./edit-class-dialog.component.css']
})
export class EditClassDialogComponent {
  formulario: FormGroup;
  selectedCourse: Course;
  coursesList: Course[];

  constructor(
    private dialogRef: MatDialogRef<EditClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Class,
    private classService: ClassService,
    private courseService: CourseService
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(data.id),
      commission: new FormControl(data.commission),
      professor: new FormControl(data.professor),
      course: new FormControl(data.course)
    });
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe((cursos: Course[]) => {
      this.coursesList = cursos;
    });

    this.selectedCourse = this.formulario.value.course;
  }

  public closeModal() {
    this.dialogRef.close();
  }

  saveChanges() {
    this.classService.saveChanges(this.formulario.getRawValue());
  }
}

