import { NgModule } from '@angular/core';

import { CitaRoutingModule } from './cita-routing.module';
import { BorrarCitaComponent } from './components/borrar-cita/borrar-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ActualizarCitaComponent } from './components/actualizar-cita/actualizar-cita.component';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from './shared/service/cita.service';


@NgModule({
  declarations: [
    CrearCitaComponent,
    ListarCitaComponent,
    BorrarCitaComponent,
    ActualizarCitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule
  ],
  providers: [CitaService]
})
export class CitaModule { }
