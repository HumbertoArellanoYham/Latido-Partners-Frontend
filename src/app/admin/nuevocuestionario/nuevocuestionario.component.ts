import { Component } from '@angular/core';

// Import for material design 
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nuevocuestionario.component.html',
  styleUrl: './nuevocuestionario.component.css'
})
export class NuevocuestionarioComponent {
  accordion = viewChild.required(MatAccordion);


  save(){
    swal.fire('Registro exitoso!', "Se guardo correctamente el cuestionario", 'success');
  }
}
