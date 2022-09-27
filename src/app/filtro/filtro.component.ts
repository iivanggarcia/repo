import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor() { }

  @Output() cambios = new EventEmitter <string> ();

  eleccion:any;
  ngOnInit(): void {
  }

  filtro(){
    this.cambios.emit(this.eleccion);
  }

}
