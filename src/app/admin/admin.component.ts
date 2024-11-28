import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import {Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

// Imports for material design 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// Imports Form
import {FormBuilder} from '@angular/forms';
import {FormControl, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import swal from 'sweetalert2';
import { MAT_FORM_FIELD, MatFormFieldControl } from '@angular/material/form-field'; 

// Http
import { HttpClientModule } from '@angular/common/http';

// Servicios 
import {AdministradorServiceService} from '../core/services/administrador-service.service';

// Interfaz 
import  {Administrador}  from '../core/interfaces/administrador';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatFormFieldModule, MatButtonModule,
    FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, MatIconModule,
    MatInputModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.nonNullable.group({
    usuario: ['', Validators.required],
    clave: ['', Validators.required]
  }); 


  constructor(private router: Router, private adminService: AdministradorServiceService){}


  admin: Administrador = {
    idAdmin: 0,
    usuario: '',
    clave: '',
    nombre: ''
  };


  login() {
    if (this.profileForm.valid) {
      const usuario = this.profileForm.controls.usuario.value!;
      const clave = this.profileForm.controls.clave.value!;
  
      this.adminService.getAdministradorLoginValid(usuario, clave).subscribe(
        (admin) => {
          this.admin = admin;
  
          // Valida después de recibir respuesta del servidor
          if (this.admin.usuario === usuario && this.admin.clave === clave) {
            this.router.navigate(['/cuestionarios']);
          } else {
            swal.fire({
              icon: "error",
              title: "Intenta de nuevo",
              text: "Usuario o clave incorrectos!",
            });
          }
        },
        (error) => {
          // Manejo de errores
          swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo conectar al servidor.",
          });
        }
      );
    }
  }
  

  // Routing 
  goTrabajadorPanel(){
    this.router.navigate(['/partners']);
  }
  
  // Clave 
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}

