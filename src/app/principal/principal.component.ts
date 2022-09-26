import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  obj : any;

  constructor(private servicio: DatosService) { }

  ngOnInit(): void {
    this.servicio.inicializar();
    this.servicio.datosJson$.subscribe((datos : any) => {
      if(datos == undefined) return;
      this.obj = datos;
      
    });
  }

}
