import { Component } from '@angular/core';

import { Router } from '@angular/router';

// Imports for material design
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-vistacuestionarios',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatIconModule,
     MatTabsModule, MatListModule, MatDividerModule, MatRadioModule],
  templateUrl: './vistacuestionarios.component.html',
  styleUrl: './vistacuestionarios.component.css'
})
export class VistacuestionariosComponent {
  nombreCuestionarios: string[] = ['Caja', 'Pedidos', 'Atencion a cliente', 'Drive', 'Limpieza', 'Decoracion'];
  constructor(private router: Router){}

  // Routing
  goNuevoCuestionario(){
    this.router.navigate(['/nuevocuestionario']);
  }
}
