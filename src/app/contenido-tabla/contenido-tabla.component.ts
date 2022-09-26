import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosService } from '../datos.service';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-contenido-tabla',
  templateUrl: './contenido-tabla.component.html',
  styleUrls: ['./contenido-tabla.component.css']
})
export class ContenidoTablaComponent implements OnInit {

  obj : any;

  constructor(private servicio: DatosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.servicio.inicializar();
    this.servicio.datosJson$.subscribe((datos : any) => {
      if(datos == undefined) return;
      this.obj = datos;
      console.log(datos);  
    });
  }

  llamada(data : any){
    const dialogRef = this.dialog.open(FormularioComponent, {
      data,
      width: "600px"
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log(result);
    })
  }

}
