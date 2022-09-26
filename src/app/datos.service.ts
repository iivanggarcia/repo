import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url = "https://jsonplaceholder.typicode.com/todos";
  datosJson$ = new BehaviorSubject<any>(undefined);

  constructor(private http: HttpClient) { }

  peticion() : Observable<any>{
    return this.http.get(this.url).pipe(
      map((obj : any) => {
        obj.sort((a: any, b: any) => (a.title < b.title ? -1 : 1));
        console.log(obj);
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
}
