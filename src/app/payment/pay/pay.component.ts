import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  
  step2:boolean = false;
  step3:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
