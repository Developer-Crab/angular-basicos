import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  template: `
  <h1>{{ title }}</h1>

  <h3>La base es: <strong> {{ base}} </strong></h3>


  <span> {{ num }} </span> <br><br>


  <button (click)="operacion(base)">incrementar + {{ base }}</button>

  <button (click)="operacion(-base)">decrementar - {{ base }}</button>

  `
})

export class ContadorComponent {

  public title: string = 'Contador App';

  public num: number = 0;

  public base: number = 15;

   // incrementar(){
  //   this.num ++;
  // }

  // decrementar(){
  //   this.num --;
  // }

  operacion ( valor:number ){
    this.num += valor;
  }
}
