import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Import interfaces 
import { Cuestionario } from '../interfaces/cuestionario';

// Peticion Http
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioServiceService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/cuestionario';

  // Peticiones al servidor 
  obtenerTodosLosCuestionarios(): Observable<Cuestionario[]> {
    return this.httpClient.get<Cuestionario[]>(`${this.url}/all-cuestionarios`);
  }

  agregarCuestionario(cuestionario: Cuestionario): Observable<Cuestionario> {
    return this.httpClient.post<Cuestionario>(`${this.url}`, cuestionario);
  }
}
