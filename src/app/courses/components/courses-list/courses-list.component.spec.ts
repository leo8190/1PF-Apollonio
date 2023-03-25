import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { Course } from '../../model/course.model';
import { CourseService } from '../../service/course.service';
import { CoursesListComponent } from './courses-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        CourseService,
        HttpClientTestingModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.dataSource.data = testCourses;
  });

  it('should create the CoursesListComponent', () => {
    expect(component).toBeTruthy();
  });

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

  it('should test the content of the courses table', (done) => {
    fixture.whenStable().then(() => {
      expect(component.dataSource.data).toEqual(testCourses);
      done();
    });
  });

  it('should test the rows quantity of the courses table', (done) => {
    fixture.whenStable().then(() => {
      // 1 header row + 4 added record = 5 rows
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(5);
      done();
    });
  });


  it('should test the content of the header row of the courses table', (done) => {
    fixture.whenStable().then(() => {
      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('Name');
      expect(headerRow.cells[1].innerHTML).toBe('Description');
      expect(headerRow.cells[2].innerHTML).toBe('Duration');
      expect(headerRow.cells[3].innerHTML).toBe('Actions');
      done();
    });
  });

  it('should test the content of the data rows of the courses table', (done) => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let tableRows = fixture.nativeElement.querySelectorAll('tr');

      // Second data row content
      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe('ReactJS');
      expect(row2.cells[1].innerHTML).toBe('A learning program in this marvelous technology');
      expect(row2.cells[2].innerHTML).toBe('3 months');

      // Third data row content
      let row3 = tableRows[3];
      expect(row3.cells[0].innerHTML).toBe('Vue.JS');
      expect(row3.cells[1].innerHTML).toBe('An adventure into this not so well known front-end framework');
      expect(row3.cells[2].innerHTML).toBe('3 months');

      // Fourth data row content
      let row4 = tableRows[4];
      expect(row4.cells[0].innerHTML).toBe('.NET');
      expect(row4.cells[1].innerHTML).toBe('A complete course in this useful Microsoft framework');
      expect(row4.cells[2].innerHTML).toBe('6 months');

      done();
    });
  });
});
