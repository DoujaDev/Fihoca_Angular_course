import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  constructor(private estadoService:EstadoService,
              private router:Router) { }

  ngOnInit() {
    this.estadoService.nombre = "Julia";
    this.estadoService.edad = 18;
    this.estadoService.activo = true;
    console.log("****Estado en el PresupuestoComponent****");
    console.log("activo: ",this.estadoService.activo);
    console.log("edad: ",this.estadoService.edad);
    console.log("fecha: ",this.estadoService.fecha);
    console.log("nombre: ",this.estadoService.nombre);
  }

  go(){
    this.router.navigateByUrl('/contratacion');
  }

}
