import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Administrador } from '../interfaces/administrador';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorServiceService {
  url = 'http://localhost:8080/admin-login';

  constructor(private httpClient: HttpClient) { }

  getAdministradorLoginValid(usuario: string, clave: string): Observable<Administrador> {
    return this.httpClient.get<Administrador>(`${this.url}/validar-login/${usuario}/${clave}`);
  }
}
