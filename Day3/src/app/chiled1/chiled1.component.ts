import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chiled1',
  templateUrl: './chiled1.component.html',
  styleUrls: ['./chiled1.component.css']
})
export class Chiled1Component implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }
  news:{}={}
  username:string='';
  age:number=0;
  @Output() Myevent=new EventEmitter();

  addData(){
  if(this.age>20&&this.age<40 &&this.username.length>3){
   this.news={Name:this.username,Age:this.age}
   this.Myevent.emit(this.news)
  }

  }




}
