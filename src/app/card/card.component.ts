import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  //declarando el decorador @ - sirve para intercambiar entre componentes
  @Input()dataEntrante:any;
  
  constructor() { }
  ngOnInit(): void {
   
  }

}
