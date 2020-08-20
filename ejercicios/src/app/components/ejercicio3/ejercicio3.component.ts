import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component  {

  resultado=0;
  champinyones:string;
  queso:string;
  tipoPizza:any = undefined;
  tipoPizzas = [
    {  nombre:"margarita",precio: 5},
    {  nombre:"cuatro_quesos", precio:8},
    {  nombre:"diavola",precio:10},
    {  nombre:"romana",precio:12},
    {  nombre:"sinensia",precio:15}
  ]
  tamanyoPizza:string;
  tamanyosPizzas:number[]=[1,2,3,4,5];

pedido = {
  precioBase:10,
  pizza: undefined,
  champi:undefined,
  quesi:undefined,
  size:undefined
};


//pedido2 pizza = this.tipoPizza;

calcularPrecio(){
 
  var importech = (this.champinyones=="sí")?2:0;
  var importequ=(this.queso =="sí")?2:0;

  this.pedido.pizza=this.tipoPizza;
  this.pedido.champi=this.champinyones;
  this.pedido.quesi=this.queso;
  this.pedido.size=this.tamanyoPizza;

  console.log(this.pedido)
  
  this.resultado = this.pedido.pizza.precio+importech+importequ+(this.pedido.size*3); 

  }


  constructor() { }

 

}


