import { Component } from '@angular/core';
import { InscriptionService } from '../../../inscriptions/service/inscription.service';
import { MatTableDataSource } from '@angular/material/table';
import { Inscription } from 'src/app/inscriptions/model/inscription.model';
import { EditInscriptionDialogComponent } from '../edit-inscription-dialog/edit-inscription-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inscriptions-list',
  templateUrl: './inscriptions-list.component.html',
  styleUrls: ['./inscriptions-list.component.css']
})
export class InscriptionsListComponent {
  Inscriptions!: Inscription[];
  dataSource!: MatTableDataSource<Inscription>;
  columns: string[] = ['id', 'studentId', 'courseId', 'actions']

  constructor(private InscriptionService: InscriptionService, private dialog: MatDialog) { }

  ngOnInit() {
    this.InscriptionService.getInscriptions().subscribe((Inscriptions) => {
      this.Inscriptions = Inscriptions;
      this.dataSource = new MatTableDataSource<Inscription>(this.Inscriptions);
    });
  }

  editInscription(Inscription: Inscription) {
    const dialogRef = this.dialog.open(EditInscriptionDialogComponent, {
      data: Inscription
    });
  }

  deleteInscription(idInscription: number) {
    this.InscriptionService.deleteInscription(idInscription);
  }
}


