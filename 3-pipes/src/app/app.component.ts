import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
} )
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'StIwaR JuLiAn';

  arreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  status: boolean = false;

  idioma: string = "en";
  videoUrl: string = "https://www.youtube.com/embed/Ut9iJD83Rxs";

  valorPromesa = new Promise<string>( ( resolve ) => {
    setTimeout( () => {
      resolve( "llego la data" );
    }, 4500 )
  } );

  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20,
    }
  }

  constructor () {

  }

  changeLanguage ( language: string ) {
    this.idioma = language;
  }
}
