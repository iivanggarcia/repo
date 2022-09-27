import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioFiltroService {
 
  estatus$ = new BehaviorSubject <any> (undefined)
  constructor() {}
  
  setestatus ( nombre : string )
  {
    this.estatus$.next(nombre);
  }

  getestatus ()
  {
    return this.estatus$;
  }
}
