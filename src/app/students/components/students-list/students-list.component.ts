import { Component, OnInit, Injector } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/students/model/student.model';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../../service/student.service';
import { Observable, Subscription } from 'rxjs';
import { StudentState } from '../../state/student-state.reducer';
import { Store } from '@ngrx/store';
import { selectLoadingStudents, selectLoadedStudents } from '../../state/student-state.selectors';
import { loadStudentState } from '../../state/student-state.actions';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  suscription!: Subscription;
  students!: Student[];
  dataSource!: MatTableDataSource<Student>;
  columnas: string[] = ['nameAndSurname', 'email', 'documentNumber', 'phoneNumber', 'actions'];
  loading$!: Observable<Boolean>;
  students$!: Observable<Student[]>;

  constructor(private studentService: StudentService, private dialog: MatDialog, private injector: Injector, private store: Store<StudentState>) { }

  ngOnInit() {
    // this.studentService.triggerMethod.subscribe(() => {
    //   this.refresh()
    // });

    // const studentService = this.injector.get(StudentService);

    // studentService.getStudents().subscribe((students) => {
    //   this.students = students;
    //   this.dataSource = new MatTableDataSource<Student>(this.students);
    // });
    this.store.dispatch(loadStudentState());

    this.loading$ = this.store.select(selectLoadingStudents);

    this.studentService.triggerMethod.subscribe(() => {
      this.refresh()
    });

    this.dataSource = new MatTableDataSource<Student>();

    this.students$ = this.store.select(selectLoadedStudents);

    let students = this.students$.subscribe((students: Student[]) => {
      this.dataSource.data = students;
    });

    this.suscription = students;
  }

  openModal(student: Student) {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      data: student
    });
  }

  public refresh() {
    this.dataSource = new MatTableDataSource<Student>();

    this.suscription = this.studentService.getStudents().subscribe((cursos: Student[]) => {
      this.dataSource.data = cursos;
    });

    this.dialog.closeAll();
  }

  deleteStudent(idStudent: number) {
    const studentService = this.injector.get(StudentService);
    studentService.deleteStudent(idStudent);
    alert("Press accept to finish with the delete");
    this.refresh();
  }
}
