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
    /*if(!this.servicio.huboCambios){
      this.servicio.peticion().subscribe((datos : any) => {
        if(datos == undefined) return;
        this.obj = datos;
      });
    }
    else{
      this.obj = this.servicio.obtenerJsonLocalStorage();
    }*/
    this.servicio.cambio$.subscribe((datos : any) => {
      if(!this.servicio.huboCambios){
          console.log(this.servicio.huboCambios);
          if(datos == undefined) return;
          this.obj = datos;
      }
      else{
        console.log(this.servicio.huboCambios);
        this.obj = this.servicio.obtenerJsonLocalStorage();
      }
    });
  }

  llamada(data : any){
    const dialogRef = this.dialog.open(FormularioComponent, {
      data,
      width: "600px"
    });

    dialogRef.afterClosed().subscribe( result => {
      this.servicio.newitem = result;
      this.servicio.comparar();
    })
  }

}
