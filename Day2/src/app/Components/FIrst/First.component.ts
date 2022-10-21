import { Component } from '@angular/core';
@Component({
  selector:"app-first",
  templateUrl: './First.component.html',
  styleUrls:['./First.component.css']
})
export class FirstComponent {
  Fname:string='';
  Getname(e:any){
    this.Fname=e.target.value;
    //this.Fname=e.target.value;
  }
}
