import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InscriptionEffects } from './inscription.effects';

describe('InscriptionEffects', () => {
  let actions$: Observable<any>;
  let effects: InscriptionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InscriptionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InscriptionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
