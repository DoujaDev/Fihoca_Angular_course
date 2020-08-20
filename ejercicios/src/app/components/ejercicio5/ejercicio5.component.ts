import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component implements OnInit {
  ngOnInit(): void {
    this.amigos = [ "PEPÍN", "BARTOLO", "HONORIO","CARLOTA","ANNA","TONI"];
  }

  constructor() { }
  
  //
  numero : number = 157;
  fecha : Date = new Date(1994,4,1);
 amigos:string[]=[];
 acreedores:string[]=[];

 eliminarAmigo(amigo){
  for(let i =0; i<this.amigos.length;i++){
    if(this.amigos[i] == amigo){
      this.amigos.splice(i,1);
      break;
    }
  }
  this.acreedores.push(amigo);
 }
 eliminarAcreedor(acreedor){
  for(let i =0; i<this.acreedores.length;i++){
    if(this.acreedores[i] == acreedor){
      this.acreedores.splice(i,1);
      break;
    }
  }
  this.amigos.push(acreedor);
 }

 reset(){
  for(let i =0; i<this.acreedores.length;i++){
      this.amigos.push(this.acreedores[i]);
    }
   this.acreedores=[];
 }
}
