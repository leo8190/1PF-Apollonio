import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../classes/service/class.service';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from 'src/app/classes/model/class.model';
import { EditClassDialogComponent } from '../edit-class-dialog/edit-class-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ClassState } from '../../state/class-state.reducer';
import { Store } from '@ngrx/store';
import { selectLoadingClasses, selectLoadedClasses } from '../../state/class-state.selectors';
import { loadClassState } from '../../state/class-state.actions';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css'],
})
export class ClassesListComponent implements OnInit {
  dataSource!: MatTableDataSource<Class>;
  suscription!: Subscription;
  columnas: string[] = ['id', 'commission', 'professor', 'courseName', 'actions'];
  loading$!: Observable<Boolean>;
  class$!: Observable<Class[]>;

  constructor(private classService: ClassService, private dialog: MatDialog, private store: Store<ClassState>) { }

  ngOnInit() {
    this.store.dispatch(loadClassState());

    this.loading$ = this.store.select(selectLoadingClasses);

    this.classService.triggerMethod.subscribe(() => {
      this.refresh()
    });

    this.dataSource = new MatTableDataSource<Class>();

    this.class$ = this.store.select(selectLoadedClasses);

    let classes = this.class$.subscribe((classes: Class[]) => {
      this.dataSource.data = classes;
    });

    this.suscription = classes;
  }

  public refresh() {
    this.dataSource = new MatTableDataSource<Class>();

    this.suscription = this.classService.getClasses().subscribe((cursos: Class[]) => {
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

