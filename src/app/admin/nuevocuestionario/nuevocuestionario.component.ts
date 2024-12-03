import { Component, inject } from '@angular/core';

// Import for material design 
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';

// alert
import swal from 'sweetalert2';

import {ChangeDetectionStrategy, viewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

// Import services and interfaces 
import {Cuestionario} from '../../core/interfaces/cuestionario';
import {CuestionarioServiceService} from '../../core/services/cuestionario-service.service';

@Component({
  selector: 'app-nuevocuestionario',
  standalone: true,
  imports: [MatCardModule, MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nuevocuestionario.component.html',
  styleUrl: './nuevocuestionario.component.css'
})
export class NuevocuestionarioComponent {
  accordion = viewChild.required(MatAccordion);
  private formBuilder = inject(FormBuilder);

  cuestionarioForm = this.formBuilder.nonNullable.group({
    nombre: ['', Validators.required],
    pregunta1: ['', Validators.required],
    pregunta2: ['', Validators.required],
    pregunta3: ['', Validators.required],
    pregunta4: ['', Validators.required],
    pregunta5: ['', Validators.required],
    pregunta6: ['', Validators.required],
    activo: [false, Validators.required]
  });

  constructor(private cuestionarioService: CuestionarioServiceService){

  }

  save() {
    if (!this.cuestionarioForm.value.nombre) {
      swal.fire('Error', 'El nombre es obligatorio', 'error');
      return;
    }
  
    const preguntasList = [
      { preguntaDescription: this.cuestionarioForm.value.pregunta1 || '' },
      { preguntaDescription: this.cuestionarioForm.value.pregunta2 || '' },
      { preguntaDescription: this.cuestionarioForm.value.pregunta3 || '' },
      { preguntaDescription: this.cuestionarioForm.value.pregunta4 || '' },
      { preguntaDescription: this.cuestionarioForm.value.pregunta5 || '' },
      { preguntaDescription: this.cuestionarioForm.value.pregunta6 || '' },
    ];
  
  // Asegúrate de que 'activo' sea un booleano.
  const activo = this.cuestionarioForm.value.activo === true;  // Verifica si 'activo' es verdadero.

  // Si 'activo' es undefined, se establece como false.
  const isActivo = this.cuestionarioForm.value.activo === undefined ? false : activo;
  
    this.cuestionarioService.agregarCuestionario({
      nombre: this.cuestionarioForm.value.nombre || '',
      preguntasList: preguntasList,
      activo: activo,
    }).subscribe({
      next: () => {
        swal.fire('Registro exitoso!', "Se guardó correctamente el cuestionario", 'success');
      },
      error: (err) => {
        swal.fire('Error', 'Hubo un problema al guardar el cuestionario', 'error');
      }
    });
  }
}
