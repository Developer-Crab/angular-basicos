import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  nombre: string = 'Ironman';

  edad: number = 45;


  get getNombre(): string {
    return this.nombre.toUpperCase();
  }


  obtenerNombre(): string {
    return `El nombre es ${ this.nombre } - la edad es: ${ this.edad }`;
  }


  cambiarNombre(){
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }


}
