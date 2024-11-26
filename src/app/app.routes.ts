import { Routes } from '@angular/router';

// Import for Admin  
import { AdminComponent } from './admin/admin.component';
import { CuestionariosComponent } from './admin/cuestionarios/cuestionarios.component';
import { VistacuestionariosComponent } from './admin/vistacuestionarios/vistacuestionarios.component';
import { NuevocuestionarioComponent } from './admin/nuevocuestionario/nuevocuestionario.component';
import { ListaresultadosComponent } from './admin/listaresultados/listaresultados.component';
import { DetallesresultadosComponent } from './admin/detallesresultados/detallesresultados.component';

// Import for partners
import { PartnersComponent } from './partners/partners.component';
import { CuestionarioanswerComponent } from './partners/cuestionarioanswer/cuestionarioanswer.component';

export const routes: Routes = [
    // Routing for admin 
    { path: 'admin', component: AdminComponent},
    { path: 'cuestionarios', component: CuestionariosComponent },
    { path: 'vistacuestionarios', component: VistacuestionariosComponent },
    { path: 'nuevocuestionario', component: NuevocuestionarioComponent },
    { path: 'listaresultados', component: ListaresultadosComponent },
    { path: 'detallesresultados', component: DetallesresultadosComponent },
    { path: '', pathMatch: 'full', redirectTo: '/admin' },

    // Routing for partners
    { path: 'partners', component: PartnersComponent},
    { path: 'cuestionarioanswer', component: CuestionarioanswerComponent}
];
