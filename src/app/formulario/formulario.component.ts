import { Component, Inject, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/TareaI';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() {}

  tareaAModificar: Tarea = {
    id: 0,
    titulo: "Hola",
    estado: false
  }

  estadoCadena:string = "";

  bandera: boolean = true

  ngOnInit(): void {
      
  }

  cambiarBandera(){
    if(this.bandera){
      this.bandera = false
    }else{
      this.bandera = true
    }
  }

  pasarInfo() {
    if(this.tareaAModificar.titulo == ""){
      console.log("Ingresa un titulo valido")
      return
    }
    if(this.estadoCadena == "completado" || this.estadoCadena == "pendiente"){
      //Aqui se hace el envío de la información
      console.log("Enviando la información");
    }

  }

}
