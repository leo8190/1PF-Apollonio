import { Component, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/courses/model/course.model';
import { CourseService } from '../../../courses/service/course.service';
import { Router } from '@angular/router'
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-edit-course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {
  formulario: FormGroup;
  // @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course,
    private courseService: CourseService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name),
      description: new FormControl(data.description),
      duration: new FormControl(data.duration)
    });
  }

  public closeModal() {
    this.dialogRef.close();
  }

  saveChanges() {
    this.courseService.saveChanges(this.formulario.getRawValue());
    // this.courseService.getCourses();
    // this.router.navigate(['courses/view']); 
    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.table.renderRows();
    // });
  }
}

