import { Component } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppAngularintro';

  public ArregloTarjetas:Tarjeta[]=[]

  ngOnInit(): void {

    this.ArregloTarjetas=[
      {titulo:'video 1',subtitulo:'subtitulo 1',image:"https://th.bing.com/th/id/OIP.AaMt0XLZgwEyvLTG2e4rUwHaEX?w=250&h=180&c=7&r=0&o=5&pid=1.7"},
      {titulo:'video 2',subtitulo:'subtitulo 2',image:"https://th.bing.com/th/id/OIP.AaMt0XLZgwEyvLTG2e4rUwHaEX?w=250&h=180&c=7&r=0&o=5&pid=1.7"},
      {titulo:'video 3',subtitulo:'subtitulo 3',image:"https://th.bing.com/th/id/OIP.AaMt0XLZgwEyvLTG2e4rUwHaEX?w=250&h=180&c=7&r=0&o=5&pid=1.7"},
      {titulo:'video 4',subtitulo:'subtitulo 4',image:"https://th.bing.com/th/id/OIP.AaMt0XLZgwEyvLTG2e4rUwHaEX?w=250&h=180&c=7&r=0&o=5&pid=1.7"}
    ]

  }
}
