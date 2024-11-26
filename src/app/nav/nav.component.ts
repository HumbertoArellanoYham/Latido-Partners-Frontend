import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Imports of angular material design
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatButtonModule, MatMenuModule, MatGridListModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router){ }


  // Routing for multiples views
  goHome(){
    this.router.navigate(['/admin']);
  }

  goAdmin(){
    this.router.navigate(['/admin']);
  }

  goPartners(){
    this.router.navigate(['/partners']);
  }

}
