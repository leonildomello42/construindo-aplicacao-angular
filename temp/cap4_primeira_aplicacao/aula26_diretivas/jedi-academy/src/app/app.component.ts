import { Component } from '@angular/core';
import { Student } from './student/student.model';



@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'jedi-academy main';


  /*
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'};
  leia = {name: 'Leia', isJedi: false};
  han = {name: 'Han', isJedi: false};
  */

  students?: Student[] = [

    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false},
    {name: 'Han', isJedi: false}

  ]
}
