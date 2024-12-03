import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

// Imports for material design
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

// Interfaces
import {Cuestionario} from '../../core/interfaces/cuestionario';
import {Resultado} from '../../core/interfaces/resultado';

//Servicio
import {CuestionarioServiceService} from '../../core/services/cuestionario-service.service';
import {ResultadoServiceService} from '../../core/services/resultado-service.service';

@Component({
  selector: 'app-vistacuestionarios',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatIconModule,
     MatTabsModule, MatListModule, MatDividerModule, MatRadioModule, RouterLink],
  templateUrl: './vistacuestionarios.component.html',
  styleUrl: './vistacuestionarios.component.css'
})
export class VistacuestionariosComponent implements OnInit {
  nombreCuestionarios: Cuestionario[] = [];
  cuestionarioResultados: Resultado[] = [];
  detailsResult!: Resultado;
  
  constructor(private router: Router,
    private cuestionarioService: CuestionarioServiceService,
    private resultadoService: ResultadoServiceService,
    private activatedRoute: ActivatedRoute
  ){}

  //Cuando el componente carga inicialmente 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.cuestionarioService.obtenerTodosLosCuestionarios().subscribe((data) =>{
      this.nombreCuestionarios = data
    });

    this.resultadoService.obtenerTodosLosResultados().subscribe((data) => {
      this.cuestionarioResultados = data
    })

  }

  // Routing
  goNuevoCuestionario(){
    this.router.navigate(['/nuevocuestionario']);
  }

}

