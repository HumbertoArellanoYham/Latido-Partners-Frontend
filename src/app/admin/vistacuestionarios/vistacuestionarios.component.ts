import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

// Imports for material design
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

export interface resultado {
  name: string;
  fecha: string;
}

@Component({
  selector: 'app-vistacuestionarios',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatIconModule,
     MatTabsModule, MatListModule, MatDividerModule, MatRadioModule, RouterLink],
  templateUrl: './vistacuestionarios.component.html',
  styleUrl: './vistacuestionarios.component.css'
})
export class VistacuestionariosComponent {
  nombreCuestionarios: string[] = ['Caja', 'Pedidos', 'Atencion a cliente', 'Drive', 'Limpieza', 'Decoracion'];
  cuestionarioResultados: resultado[] = [
    { name: "Servicio al cliente", fecha: "2024-11-29" },
    { name: "Drive", fecha: "2024-11-30" }
  ];
  
  constructor(private router: Router){}

  // Routing
  goNuevoCuestionario(){
    this.router.navigate(['/nuevocuestionario']);
  }

}

