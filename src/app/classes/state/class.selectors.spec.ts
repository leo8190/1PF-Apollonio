import * as fromClass from './class.reducer';
import { selectClassState } from './class.selectors';

describe('Class Selectors', () => {
  it('should select the feature state', () => {
    const result = selectClassState({
      [fromClass.classFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
