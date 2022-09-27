import { Component, OnInit } from '@angular/core';
import { ServicioFiltroService } from '../servicio-filtro.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  obj : any;

  constructor(private serviciofiltro : ServicioFiltroService) { }

  ngOnInit(): void {
   
  }

  transmicion(event:string){

    this.serviciofiltro.setestatus(event);
    
  }
}
