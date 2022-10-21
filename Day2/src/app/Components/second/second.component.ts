import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
arr:string[]=["assets/images/WhatsApp Image 2022-10-04 at 9.22.03 PM (1).jpeg","assets/images/WhatsApp Image 2022-10-04 at 9.22.03 PM.jpeg","assets/images/WhatsApp Image 2022-10-04 at 9.22.04 PM (1).jpeg","assets/images/WhatsApp Image 2022-10-04 at 9.22.04 PM (2).jpeg"]
coun:number=0;
run:any;

constructor() { }
next(){
if(this.coun<this.arr.length-1){
  this.coun++;
}
}
back(){
  if(this.coun>0){
    this.coun--;
  }
  }

slide(){
this.run=setInterval(()=>{if(this.coun==this.arr.length-1){
  this.coun=0;
  }this.coun++},1000)
}
stop(){
  clearInterval(this.run);
}
}
