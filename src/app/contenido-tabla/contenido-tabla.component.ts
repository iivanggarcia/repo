import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-contenido-tabla',
  templateUrl: './contenido-tabla.component.html',
  styleUrls: ['./contenido-tabla.component.css']
})
export class ContenidoTablaComponent implements OnInit {

  obj : any;

  constructor(private servicio: DatosService) { }

  ngOnInit(): void {
    this.servicio.inicializar();
    this.servicio.datosJson$.subscribe((datos : any) => {
      if(datos == undefined) return;
      this.obj = datos;
      console.log(datos);  
    });
  }


}
