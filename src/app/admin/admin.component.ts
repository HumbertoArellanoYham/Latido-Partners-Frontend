import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Imports for material design 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router: Router){}

  // Navigation 
  goAdminPanel(){
    this.router.navigate(['/cuestionarios']);
  }

  goTrabajadorPanel(){
    this.router.navigate(['/partners']);
  }
}
