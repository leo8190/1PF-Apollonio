import { Component, OnInit } from '@angular/core';
import { StudentService } from '/Users/Leo/source/repos/1PF-Apollonio/src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  constructor(private postsService: StudentService) {}

  ngOnInit() {
    // subscribe to the Observable to make the HTTP call
    this.postsService.getStudents().subscribe((posts) => {
      // we received our posts!
      console.log(posts);
    });
  }
}
