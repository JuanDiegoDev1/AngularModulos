import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Input()dataEntrante2:any;

  constructor() { }

  ngOnInit(): void {
  }

}
