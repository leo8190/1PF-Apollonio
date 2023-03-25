import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../classes/service/class.service';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from 'src/app/classes/model/class.model';
import { EditClassDialogComponent } from '../edit-class-dialog/edit-class-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css'],
})
export class ClassesListComponent implements OnInit {
  dataSource!: MatTableDataSource<Class>;
  suscripcion!: Subscription;
  columnas: string[] = ['id', 'commission', 'professor', 'courseName', 'actions']

  constructor(private classService: ClassService, private dialog: MatDialog) { }

  ngOnInit() {
    this.classService.triggerMethod.subscribe(() => {
      this.refresh()
    });

    this.dataSource = new MatTableDataSource<Class>();

    this.suscripcion = this.classService.getClasses().subscribe((cursos: Class[]) => {
      this.dataSource.data = cursos;
    });
  }

  public refresh() {
    this.dataSource = new MatTableDataSource<Class>();

    this.suscripcion = this.classService.getClasses().subscribe((cursos: Class[]) => {
      this.dataSource.data = cursos;
    });

    this.dialog.closeAll();
  }

  editClass(class$: Class) {
    this.dialog.open(EditClassDialogComponent, {
      data: class$
    });
  }

  deleteClass(idClass: number) {
    this.classService.deleteClass(idClass);
    alert("Press accept to finish with the delete");
    this.refresh();
  }
}

