import { Component} from '@angular/core';
import { Router } from '@angular/router';

// Import design material  
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTabsModule, MatDividerModule, MatExpansionModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  readonly panelOpenState = signal(false);

  constructor(private router: Router){}

  goAdmin(){
    this.router.navigate(['/admin']);    
  }
}
