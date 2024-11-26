import { Component } from '@angular/core';

import { RouterLink} from '@angular/router';

// import for material design 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-cuestionarios',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './cuestionarios.component.html',
  styleUrl: './cuestionarios.component.css'
})
export class CuestionariosComponent {

}
