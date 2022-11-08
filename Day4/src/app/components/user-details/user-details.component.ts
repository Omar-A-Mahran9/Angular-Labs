import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {

myActivated = 1;
  constructor(myActivated:ActivatedRoute) {
    console.log(myActivated);
    return this.myActivated = myActivated.snapshot.params['id'];
   }

 

}
