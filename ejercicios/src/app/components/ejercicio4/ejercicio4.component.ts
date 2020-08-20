import { Component, OnInit } from '@angular/core';
import { Producto } from './model/Producto';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component  {

  nombreProducto:string;
  cantidadProducto:number;
  productos:Producto[]=[];

  constructor() { }

  anyadir(){

    var newProducto = new Producto(this.nombreProducto, this.cantidadProducto);
    this.productos.push(newProducto);
  }

  eliminar(producto){
    console.log(producto);
    for(let i =0; i<this.productos.length;i++){
      if(this.productos[i].nombre == producto.nombre){
        this.productos.splice(i,1);
        break;
      }
    }
  }
  

}
