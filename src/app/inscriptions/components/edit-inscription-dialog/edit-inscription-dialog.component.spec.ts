import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInscriptionDialogComponent } from './edit-inscription-dialog.component';

describe('EditInscriptionDialogComponent', () => {
  let component: EditInscriptionDialogComponent;
  let fixture: ComponentFixture<EditInscriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInscriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInscriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
