import { Component, OnInit } from '@angular/core';
import { CanDeactivateInterface } from 'src/app/guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, CanDeactivateInterface {

  constructor() { }

  ngOnInit(): void {
  }
  
   
  confirm(){
     return confirm(
       "Do you want To leave this Page!"
     )
  }

}
