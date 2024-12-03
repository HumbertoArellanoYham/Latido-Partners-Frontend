import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaz
import {Resultado} from '../interfaces/resultado';
    
// Peticion Http
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultadoServiceService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/resultado';

  obtenerTodosLosResultados(): Observable<Resultado[]>{
    return this.httpClient.get<Resultado[]>(`${this.url}/getAll`);
  }

  enviarResultado(resultado: Resultado): Observable<Resultado> {
    return this.httpClient.post<Resultado>(`${this.url}/respuesta`, resultado);
  }

  obtenerResultadoPorId(id: number): Observable<Resultado>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',  // Tipo de contenido
    });
    return this.httpClient.get<Resultado>(`${this.url}/resultadoById/${id}`, {headers});
  }
}
