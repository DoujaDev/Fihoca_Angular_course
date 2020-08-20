import { Injectable } from '@angular/core';

class Persona{
  nombre:string;
  edad:number;
  activo:boolean;
  comentario:string[];
}

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  persona:Persona= new Persona();
  fecha:Date = new Date();
  /************************************ */
  activo:boolean = false;
  nombre:string =""; 
  edad:number = 0;



  constructor() { 
    /*this.persona.nombre = "María";
    this.persona.edad =20;
    this.persona.comentario = ["A","B"];*/

  }

  saveData(){
    localStorage.setItem("Persona",JSON.stringify(this.persona));
    localStorage.setItem("Fecha", JSON.stringify(this.fecha));


  }
}
