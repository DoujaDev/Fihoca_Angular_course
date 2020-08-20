import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private estadoService:EstadoService,
              private router:Router) {}

  ngOnInit() {

    this.estadoService.edad =20;
    this.estadoService.fecha = new Date(1320,10,2);
    this.estadoService.nombre = "María";
    console.log("****Estado en el InfoComponent****");
    console.log("activo: ",this.estadoService.activo);
    console.log("edad: ",this.estadoService.edad);
    console.log("fecha: ",this.estadoService.fecha);
    console.log("nombre: ",this.estadoService.nombre);
  }

  go(){
    this.router.navigateByUrl('/presupuesto');
  }

}
