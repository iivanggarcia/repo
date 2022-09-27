import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DatosService } from '../datos.service';
import { ServicioFiltroService } from '../servicio-filtro.service';

@Component({
  selector: 'app-contenido-tabla',
  templateUrl: './contenido-tabla.component.html',
  styleUrls: ['./contenido-tabla.component.css']
})
export class ContenidoTablaComponent implements OnInit {

  obj: any;
  aux : any;

  constructor(private servicio: DatosService, private filtroservicio: ServicioFiltroService) { }

  ngOnInit(): void {
    this.servicio.inicializar();
    this.servicio.datosJson$.subscribe((datos: any) => {
      if (datos == undefined) return;
      this.obj = datos;
      this.aux = datos;
    });

    // servicio filtro
    this.filtroservicio.getestatus().subscribe((item: any) => {
      if (item == undefined) return;

      this.aux = this.obj.filter((tarea: any) => {
        console.log("item", item)
        console.log("tarea", tarea.id)
        if (item === 'false' && tarea.completed === false)
          return tarea;

        if (item === 'true' && tarea.completed === true)
          return tarea;

        if (item === 'all')
          return tarea;
      })
      
    })
  }


}
