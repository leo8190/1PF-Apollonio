import { NgModule } from '@angular/core';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { EditCourseDialogComponent } from './components/edit-course-dialog/edit-course-dialog.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseService } from './service/course.service';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CoursesListComponent,
    EditCourseDialogComponent,
    AddCourseComponent
  ],
  imports: [
    MaterialModule,
    SharedModule,
    CoreModule,
    CoursesRoutingModule
  ],
  exports: [
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule { }
