import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { Router } from '@angular/router';

class Persona{
  nombre:string;
  edad:number;
  activo:boolean = false;
  comentario:string[];
}
@Component({
  selector: 'app-contratacion',
  templateUrl: './contratacion.component.html',
  styleUrls: ['./contratacion.component.css']
})
export class ContratacionComponent implements OnInit {

  persona:Persona;
  constructor(private estadoService:EstadoService,
              private router:Router) { }

  ngOnInit() {
    console.log(localStorage.length);
    if(localStorage.length == 0){
      this.persona = new Persona();
    }else{
      this.getData();
    }
   
    this.estadoService.fecha = new Date(2009,5,11);
    /*console.log("****Estado en el ContratacionComponent****");
    console.log("activo: ",this.estadoService.activo);
    console.log("edad: ",this .estadoService.edad);
    console.log("fecha: ",this.estadoService.fecha);
    console.log("nombre: ",this.estadoService.nombre);*/
  }

  getData(){
    console.log("Antes de recuperar los datos",this.estadoService.persona);
    console.log("recuperar los datos");

    this.persona = JSON.parse(localStorage.getItem("Persona"));
    this.estadoService.persona = JSON.parse(localStorage.getItem("Persona"));
    
    console.log("Despues de recuperar los datos",this.estadoService.persona);

  }

  go(){ 
    console.log(this.persona.activo);
    this.estadoService.persona.nombre =  this.persona.nombre;
    this.estadoService.persona.edad = this.persona.edad;
    this.estadoService.persona.activo = this.persona.activo;
    this.estadoService.saveData();
    this.router.navigateByUrl('/info');
  }

}
