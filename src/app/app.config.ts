import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

//Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// alert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Http client servicios backend

import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {provideNativeDateAdapter} from '@angular/material/core';

// Form
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideAnimationsAsync(), SweetAlert2Module,
    provideHttpClient(
      withFetch()
    ),
    MatInputModule
  ]
};
