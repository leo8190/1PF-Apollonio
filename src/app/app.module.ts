import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentDialogComponent } from './components/edit-student-dialog/edit-student-dialog.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { routes } from '../app/app-routing-module';
import { MatDialogModule } from '@angular/material/dialog';
import { ColumnsHeadersStyle } from './directives/columns-headers-style.directive';
import { JoinNameAndSurname } from './pipes/join-name-and-surname.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsListComponent,
    AddStudentComponent,
    EditStudentDialogComponent,
    DeleteStudentComponent,
    ColumnsHeadersStyle,
    JoinNameAndSurname
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [
    HttpClient,
    EditStudentDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
