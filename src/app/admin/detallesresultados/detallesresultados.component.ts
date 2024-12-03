import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Interfaces
import {Cuestionario} from '../../core/interfaces/cuestionario';
import {Resultado} from '../../core/interfaces/resultado';

//Servicio
import {CuestionarioServiceService} from '../../core/services/cuestionario-service.service';
import {ResultadoServiceService} from '../../core/services/resultado-service.service';

// Material design
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-detallesresultados',
  standalone: true,
  imports: [CommonModule, MatCardModule,
    MatDividerModule, MatListModule
  ],
  templateUrl: './detallesresultados.component.html',
  styleUrl: './detallesresultados.component.css'
})
export class DetallesresultadosComponent implements OnInit{
  id!:number;
  result!: Resultado;
  
  constructor(
    private cuestionarioService: CuestionarioServiceService,
    private resultadoService: ResultadoServiceService,
    private activatedRoute: ActivatedRoute,
  ){ }

  ngOnInit() {
    // Obtener el id de la ruta 
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log('Id', this.id);

    this.resultadoService.obtenerResultadoPorId(this.id).subscribe((data) => {
      this.result = data;
    
    console.log(this.result);
    })
  } 

}
