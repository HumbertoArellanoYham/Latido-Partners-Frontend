import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaz
import {Partners} from '../interfaces/partners';
    
// Peticion Http
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnersServiceService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/partners';

  obtenerTodosLosPartners(): Observable<Partners[]>{
    return this.httpClient.get<Partners[]>(`${this.url}/all-partners`);
  }
}
