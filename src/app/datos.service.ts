import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, elementAt, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = "https://jsonplaceholder.typicode.com/todos";
  datosJson$ = new BehaviorSubject<any>(undefined);
  auxDatos : any;
  newitem : any;
  huboCambios : any;

  constructor(private http: HttpClient) { }

  peticion() : Observable<any>{
    return this.http.get(this.url).pipe(
      map((obj : any) => {
        obj.sort((a: any, b: any) => (a.title < b.title ? -1 : 1));
        this.auxDatos = obj;
        this.grabarLocalStorage();
        console.log(this.auxDatos);
        return obj;
      })
    );
  }

  setArr$(val: any) {
    this.datosJson$.next(val);
  }

  inicializar() {
    this.peticion().subscribe((datos : any) => {
      this.setArr$(datos);
    })
  }

  grabarLocalStorage(){
    localStorage.setItem("json", JSON.stringify(this.auxDatos));
  }

  obtenerLocalStorage(){
    let aux = JSON.parse(localStorage.getItem("json"));
  }

  comparar(){
    let actualElement = this.auxDatos.find( element => element.id == this.newitem.id);
  }
}
