import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiled2',
  templateUrl: './chiled2.component.html',
  styleUrls: ['./chiled2.component.css']
})
export class Chiled2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input()  DatafromParent:{Name:String,Age:number}[]=[]
@Input() username="";
}
