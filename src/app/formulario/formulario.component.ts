import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../interfaces/TareaI';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  objAux:any

  estadoCadena:string = "";

  bandera: boolean = true

  ngOnInit(): void {
    this.objAux={...this.data}
    if(this.data.completed == false){
      this.estadoCadena = "pendiente"
      return
    }
    this.estadoCadena = "completada"
  }

  cancelarAccion(){
    return undefined;
  }

  pasarInfo() {

  }

}
