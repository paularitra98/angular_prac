import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  name:string="aritra";
  num1:number=3;
  num2:number=4;
  sum:number=0;

  constructor() {
  

   }

  ngOnInit(): void {
    this.sum=this.num1+this.num2;
  }

}
