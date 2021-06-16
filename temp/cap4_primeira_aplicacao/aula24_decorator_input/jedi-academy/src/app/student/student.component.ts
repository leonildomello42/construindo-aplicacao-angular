import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  constructor() { }

  /*
  @Input() name?: string;
  @Input() isJedi?: boolean;
  */

  @Input() student?: Student;

  ngOnInit(): void {
  }
}
