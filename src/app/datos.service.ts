import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, elementAt, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = "https://jsonplaceholder.typicode.com/todos";
  cambio$ = new BehaviorSubject<any>(undefined);
  auxDatos : any;
  newitem : any;
  huboCambios :boolean = false;
  i = 0;

  constructor(private http: HttpClient) { }

  peticion() : Observable<any>{
    return this.http.get(this.url).pipe(
      map((obj : any) => {
        obj.sort((a: any, b: any) => (a.title < b.title ? -1 : 1));
        if(localStorage.getItem("json") == null){
          this.auxDatos = obj;
          this.grabarLocalStorage();
        }
        else{
          this.auxDatos = this.inicializacionDesdeLocalStorage();
        }
        return obj;
      })
    );
  }

  inicializacionDesdeLocalStorage(){
          if((localStorage.getItem("cambios") || '{}') == '{}'){
            localStorage.setItem("cambios", ""+this.huboCambios);
          }
          else{
            this.huboCambios = this.obtenerCambiosLocalStorage();
          }

          return this.obtenerJsonLocalStorage();

  }

  setArr$(val: any) {
    this.cambio$.next(val);
  }

  inicializar() {
    this.peticion().subscribe((datos : any) => {
      this.i++;
      console.log(this.i);
      this.setArr$(datos);
    })
  }

  grabarLocalStorage(){
    localStorage.setItem("json", JSON.stringify(this.auxDatos));
    
  }

  obtenerJsonLocalStorage(){
    let aux = JSON.parse(localStorage.getItem("json") || '{}');
    return aux;
  }

  obtenerCambiosLocalStorage(){
    let aux = JSON.parse(localStorage.getItem("cambios") || '{}');
    return aux;
  }

  comparar(){
    this.huboCambios = true;
    this.auxDatos.splice(this.auxDatos.indexOf(this.auxDatos.find( (element: { id: any; }) => element.id == this.newitem.id)),1);
    this.auxDatos.push(this.newitem);
    this.auxDatos.sort((a: any, b: any) => (a.title < b.title ? -1 : 1));
    this.grabarLocalStorage();
    localStorage.setItem("cambios", ""+this.huboCambios);
    this.setArr$("cambio");
  }
}
