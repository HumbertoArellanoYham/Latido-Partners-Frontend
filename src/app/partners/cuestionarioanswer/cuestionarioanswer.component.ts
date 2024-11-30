import {ChangeDetectionStrategy, Component, inject } from '@angular/core';

// Material design import
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

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
    MatRadioModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cuestionarioanswer.component.html',
  styleUrl: './cuestionarioanswer.component.css'
})
export class CuestionarioanswerComponent {
}
