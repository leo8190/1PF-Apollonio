import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './courses/components/add-course/add-course.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';

@NgModule({
  declarations: [    
    AppComponent,
    AddCourseComponent    
  ],
  imports: [    
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
    // HttpClientModule,    
    // MatDialogModule,
    // NgbModule
  ],
  providers: [
    HttpClient,
    // EditStudentDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
