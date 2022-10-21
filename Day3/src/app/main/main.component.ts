import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  studenAge:number=0;
  studenName:string="";
  ArrForAll:{Name:string,Age:number}[]=[];

  AddToArray(){
    let newStu:{Name:string,Age:number}={
      Name:this.studenName,
      Age:this.studenAge
    }
  if(this.studenAge>30 &&this.studenName.length>3 && this.studenName !=""){
   this.ArrForAll.push(newStu);
  }
  console.log(this.ArrForAll)
  }


}
