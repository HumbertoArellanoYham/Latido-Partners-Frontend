import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, AfterViewInit } from '@angular/core';

// Material design import
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common'; 
import { Router } from '@angular/router'

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

// Alert
import swal from 'sweetalert2';

import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

// Interfaces
import {Partners} from '../../core/interfaces/partners';
import {Cuestionario} from '../../core/interfaces/cuestionario';
import {Resultado} from '../../core/interfaces/resultado'

// Services
import {CuestionarioServiceService} from '../../core/services/cuestionario-service.service';
import {PartnersServiceService} from '../../core/services/partners-service.service';
import {ResultadoServiceService} from '../../core/services/resultado-service.service';

@Component({
  selector: 'app-cuestionarioanswer',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cuestionarioanswer.component.html',
  styleUrl: './cuestionarioanswer.component.css'
})
export class CuestionarioanswerComponent implements OnInit {
  partnersInLatido: Partners[] = [];
  cuestionarioPreguntas: Cuestionario[] = [];
  nombreCuestionarios: string = '';

  // Formulario reactivo para almacenar las respuestas
  calificarCuestionario: FormGroup = this.formBuilder.group({});
  
  constructor(
    private cuestionarioService: CuestionarioServiceService,
    private partnersService: PartnersServiceService,
    private formBuilder: FormBuilder,
    private resultadoService: ResultadoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.partnersService.obtenerTodosLosPartners().subscribe(data => {
      this.partnersInLatido = data;
      console.log(data);
    });

    this.cuestionarioService.obtenerTodosLosCuestionariosActivos().subscribe(data => {
      this.cuestionarioPreguntas = data;
      if (this.cuestionarioPreguntas.length > 0) {
        this.nombreCuestionarios = this.cuestionarioPreguntas[0].nombre;
        this.initForm(); // Asegúrate de llamar a esta función después de obtener los datos
      }
      console.log(data);
    });
  }

  // Inicializar el formulario para almacenar respuestas
  initForm() {
    const formGroup: any = {};

    // Inicializa los controles de formulario basados en las preguntas
    this.cuestionarioPreguntas.forEach((cuestionario, idx) => {
      cuestionario.preguntasList.forEach((pregunta, j) => {
        // Crea un control para cada pregunta
        formGroup[`pregunta_${idx}_${j}`] = new FormControl(null, Validators.required);
      });
    });

    this.calificarCuestionario = this.formBuilder.group(formGroup); // Asigna el grupo de controles
  }

  // Función para calcular el promedio
  calcularPromedio() {
    let total = 0;
    let count = 0;

    // Recorrer todas las respuestas
    for (const control in this.calificarCuestionario.value) {
      if (this.calificarCuestionario.value[control] !== null) {
        total += this.calificarCuestionario.value[control];
        count++;
      }
    }

    return count > 0 ? total / count : 0;
  }

  // Al hacer submit, resetear el componente
  onSubmit() {
    const fecha = new Date(formatDate(new Date(), 'yyyy-MM-dd', 'en-US'));
    const promedio = this.calcularPromedio();
    console.log(`Promedio de calificación: ${promedio}`);
  
    const resultadoFinal: Resultado = {
      partner: this.partnersInLatido[0],
      cuestionario: this.cuestionarioPreguntas[0],
      calificacion: promedio,
      fecha: fecha  // Asegúrate de usar `new Date()`
    };
  
    this.resultadoService.enviarResultado(resultadoFinal).subscribe((data: Resultado) => console.log(data));  // Asegura que el tipo de 'data' esté definido correctamente
  
    swal.fire({
      title: "Se envió la respuesta!",
      text: "Excelente, no te olvides de calificar a todos",
      icon: "success"
    });
  
    // Resetear el formulario y datos
    this.calificarCuestionario.reset();
    this.partnersInLatido = [];
    this.cuestionarioPreguntas = [];
    this.router.navigate(['/partners']);
  }
}