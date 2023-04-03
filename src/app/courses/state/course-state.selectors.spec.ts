import * as fromCourse from './course-state.reducer';
import { selectCourseState } from './course-state.selectors';

describe('Course Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCourseState({
      [fromCourse.courseFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
