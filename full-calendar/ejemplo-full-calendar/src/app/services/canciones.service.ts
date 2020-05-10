import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cancion } from '../cancion.interface';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {
  canciones: Cancion[] = [];
  constructor( private http: HttpClient ) { 
    console.log('Esto viene del servicio Canciones');


    this.http.get('assets/data/data.json')
    .subscribe( (res: Array<Cancion>) => {
      console.log(res[0].nombre);
      this.canciones = res;
    });
  }
}
