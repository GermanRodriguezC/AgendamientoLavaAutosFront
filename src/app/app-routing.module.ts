import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCitaComponent } from '@cita/components/crear-cita/crear-cita.component';
import { SecurityGuard } from '@core/guard/security.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CrearCitaComponent, canActivate: [SecurityGuard]  },
  { path: 'cita', loadChildren: () => import('@cita/cita.module').then(mod => mod.CitaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
