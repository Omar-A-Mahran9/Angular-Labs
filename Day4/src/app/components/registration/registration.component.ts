import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor() { }
  
@ViewChild('f') userForm: NgForm | undefined;

  ngOnInit(): void {
  }
  studentName = "";
  studentAge =0 ;

  
  DataReg: {name:string, age:number} = {name: this.studentName, age: this.studentAge};

  
  @Output() myEvent = new EventEmitter();

  Add(){
  this.DataReg = {name: this.studentName, age: this.studentAge};

  console.log(this.userForm);
    this.myEvent.emit(this.DataReg);


   



    
  }
}
