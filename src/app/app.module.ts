import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing-module';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { InscriptionsModule } from './inscriptions/inscriptions.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from '../app/authentication/authentication.module'
import { ClassesModule } from './classes/classes.module';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/courses/model/course.model';
import { CourseService } from '../app/courses/service/course.service'
import { loadCourseState } from '../app/courses/state/course-state.actions';
import { CourseState } from '../app/courses/state/course-state.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoursesModule,
    StudentsModule,
    InscriptionsModule,
    UsersModule,
    ClassesModule,
    CoreModule,
    AuthenticationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private store: Store<CourseState>
  ) { }

  // ngOnInit() {
  //   this.store.dispatch(loadCourseState());
  // }
}
