import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  constructor() { }
  eleccion:any;

  ngOnInit(): void {
  }

  filtro(){
    console.log(this.eleccion)
  }

}
