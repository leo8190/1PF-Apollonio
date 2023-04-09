import { Component } from '@angular/core';
import { InscriptionService } from '../../../inscriptions/service/inscription.service';
import { MatTableDataSource } from '@angular/material/table';
import { Inscription } from 'src/app/inscriptions/model/inscription.model';
import { EditInscriptionDialogComponent } from '../edit-inscription-dialog/edit-inscription-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { InscriptionState } from '../../state/inscription-state.reducer';
import { Store } from '@ngrx/store';
import { selectLoadingInscriptions, selectLoadedInscriptions } from '../../state/inscription-state.selectors';
import { loadInscriptionState } from '../../state/inscription-state.actions';

@Component({
  selector: 'app-inscriptions-list',
  templateUrl: './inscriptions-list.component.html',
  styleUrls: ['./inscriptions-list.component.css']
})
export class InscriptionsListComponent {
  inscriptions!: Inscription[];
  dataSource!: MatTableDataSource<Inscription>;
  suscripcion!: Subscription;
  columns: string[] = ['id', 'studentId', 'classId', 'actions'];
  loading$!: Observable<Boolean>;
  inscriptions$!: Observable<Inscription[]>;
  suscription!: Subscription;

  constructor(private inscriptionService: InscriptionService, private dialog: MatDialog, private store: Store<InscriptionState>) { }

  ngOnInit() {
    // this.inscriptionService.triggerMethod.subscribe(() => {
    //   this.refresh()
    // });

    // this.dataSource = new MatTableDataSource<Inscription>();

    // this.suscripcion = this.inscriptionService.getInscriptions().subscribe((inscriptions: Inscription[]) => {
    //   this.dataSource.data = inscriptions;
    // });

    this.store.dispatch(loadInscriptionState());

    this.loading$ = this.store.select(selectLoadingInscriptions);

    this.inscriptionService.triggerMethod.subscribe(() => {
      this.refresh()
    });

    this.dataSource = new MatTableDataSource<Inscription>();

    this.inscriptions$ = this.store.select(selectLoadedInscriptions);

    let inscriptions = this.inscriptions$.subscribe((inscriptions: Inscription[]) => {
      this.dataSource.data = inscriptions;
    });

    this.suscription = inscriptions;

    // this.inscriptionService.getInscriptions().subscribe((inscriptions) => {
    //   this.inscriptions = inscriptions;
    //   this.dataSource = new MatTableDataSource<Inscription>(this.inscriptions);
    // });
  }

  editInscription(Inscription: Inscription) {
    this.dialog.open(EditInscriptionDialogComponent, {
      data: Inscription
    });
  }

  deleteInscription(idInscription: number) {
    this.inscriptionService.deleteInscription(idInscription);
    alert("Press accept to finish with the delete");
    this.refresh();
  }

  public refresh() {
    this.dataSource = new MatTableDataSource<Inscription>();

    this.suscripcion = this.inscriptionService.getInscriptions().subscribe((cursos: Inscription[]) => {
      this.dataSource.data = cursos;
    });

    this.dialog.closeAll();
  }
}


