import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { EditCourseDialogComponent } from './components/edit-course-dialog/edit-course-dialog.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseService } from './service/course.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    CoursesListComponent      
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule      
  ],
  exports:[   
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule { }
