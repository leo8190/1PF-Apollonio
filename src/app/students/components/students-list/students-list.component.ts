import { Component, OnInit, Injector } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/students/model/student.model';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../../service/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  suscripcion!: Subscription;
  students!: Student[];
  dataSource!: MatTableDataSource<Student>;
  columnas: string[] = ['nameAndSurname', 'email', 'documentNumber', 'phoneNumber', 'actions']

  constructor(private studentService: StudentService, private dialog: MatDialog, private injector: Injector) { }

  ngOnInit() {
    this.studentService.triggerMethod.subscribe(() => {
      this.refresh()
    });

    const studentService = this.injector.get(StudentService);

    studentService.getStudents().subscribe((students) => {
      this.students = students;
      this.dataSource = new MatTableDataSource<Student>(this.students);
    });
  }

  openModal(student: Student) {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      data: student
    });
  }

  public refresh() {
    this.dataSource = new MatTableDataSource<Student>();

    this.suscripcion = this.studentService.getStudents().subscribe((cursos: Student[]) => {
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
