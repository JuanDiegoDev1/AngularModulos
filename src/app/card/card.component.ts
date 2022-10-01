import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public titulo:string="Curso de Angular con Interpolacion"
  public img:string="https://th.bing.com/th/id/OIP.kgMNnb78WfLtDfRTZi-G1AHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7"
  @Input()dataEntrante:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
