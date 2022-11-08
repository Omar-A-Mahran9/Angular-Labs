import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  DataFromReg:  {name:string, age:number}[] = [];

 GetData(data:any){
let NewStudent:{name:string, age:number} = data;
if (data.age >=20 && data.age <=40 && data.name.length >=3) {
      this.DataFromReg.push(NewStudent);
}
}
reg = DataTransfer;

}
