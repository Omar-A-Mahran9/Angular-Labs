import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Input() DataIntoStu:any = [];

  constructor() { }

  ngOnInit(): void {
  }


}
