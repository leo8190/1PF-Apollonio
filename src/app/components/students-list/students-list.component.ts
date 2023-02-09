import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student.model';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students!: Student[];
  dataSource!: MatTableDataSource<Student>;
  columnas: string[] = ['nameAndSurname', 'email', 'documentNumber', 'phoneNumber', 'actions']

  constructor(private studentService: StudentService, private dialog: MatDialog) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      this.dataSource = new MatTableDataSource<Student>(this.students);
    });
  }

  openModal(student: Student) {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      data: student
    });
  }

  deleteStudent(idStudent: number) {
    this.studentService.deleteStudent(idStudent);
  }
}
