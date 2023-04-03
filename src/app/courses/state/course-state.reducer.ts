import { createReducer, on } from '@ngrx/store';
import { Course } from '../../courses/model/course.model';
import * as CourseStateActions from './course-state.actions';

export const courseStateFeatureKey = 'courseState';

export interface CourseState {
  loading: boolean;
  courses: Course[];
}

export const initialState: CourseState = {
  loading: false,
  courses: []
};

export const reducer = createReducer(
  initialState,
  on(CourseStateActions.loadCourseState, (state) => {
    return { ...state, loading: true };
  }),
  on(CourseStateActions.loadedCourses, (state, { courses }) => {
    return { ...state, loading: false, courses };
  }),
  on(CourseStateActions.addCourseState, (state, { course: Course }) => {
    return state;
  }),
  on(CourseStateActions.editCourseState, (state, { course: Course }) => {
    return state;
  }),
  on(CourseStateActions.deleteCourseState, (state, { course: Course }) => {
    return state;
  }),
);