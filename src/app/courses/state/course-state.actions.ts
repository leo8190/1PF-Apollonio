import { createAction, props } from '@ngrx/store';
import { Course } from '../model/course.model';

export const loadCourseState = createAction(
  '[CourseState] Load CourseStates'
);

export const loadedCourses = createAction(
  '[CourseState] Loaded courses',
  props<{ courses: Course[] }>()
);

export const addCourseState = createAction(
  '[CourseState] Add course',
  props<{ course: Course }>()
);

export const editCourseState = createAction(
  '[CourseState] Edit course',
  props<{ course: Course }>()
);

export const deleteCourseState = createAction(
  '[CourseState] Delete course',
  props<{ course: Course }>()
);

