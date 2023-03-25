import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Course } from '../model/course.model';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CourseService,
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CourseService);
  });

  it('should be created the instance of the service', () => {
    expect(service).toBeTruthy();
  });

  it("should return an array of mocked data", (done: DoneFn) => {
    let testCourses: Course[] = [
      {
        "createdAt": new Date,
        "name": "Angular",
        "description": "A complete course in Angular",
        "isActive": true,
        "duration": "3 months",
        "id": 1
      },
      {
        "createdAt": new Date,
        "name": "ReactJS",
        "description": "A learning program in this marvelous technology",
        "isActive": true,
        "duration": "3 months",
        "id": 2
      },
      {
        "createdAt": new Date,
        "name": "Vue.JS",
        "description": "An adventure into this not so well known front-end framework",
        "isActive": true,
        "duration": "3 months",
        "id": 3
      },
      {
        "createdAt": new Date,
        "name": ".NET",
        "description": "A complete course in this useful Microsoft framework",
        "isActive": true,
        "duration": "6 months",
        "id": 4
      }
    ];

    spyOn(service, 'getCourses').and.returnValue(of(testCourses))

    service.getCourses().subscribe((courses: Course[]) => {
      expect(courses).toEqual(testCourses);
      done();
    });
  })
});
