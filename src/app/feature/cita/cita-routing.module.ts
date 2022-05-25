import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { BorrarCitaComponent } from './components/borrar-cita/borrar-cita.component';
import { ActualizarCitaComponent} from './components/actualizar-cita/actualizar-cita.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crear',
        component: CrearCitaComponent
      },
      {
        path: 'listar',
        component: ListarCitaComponent
      },
      {
        path: 'borrar',
        component: BorrarCitaComponent
      },
      {
        path: 'actualizar',
        component: ActualizarCitaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
