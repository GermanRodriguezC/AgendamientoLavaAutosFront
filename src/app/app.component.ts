import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/cita/crear', nombre: 'Crear cita' },
    { url: '/cita/borrar', nombre: 'Borrar cita' },
    { url: '/cita/listar', nombre: 'Listar cita' },
    { url: '/cita/actualizar', nombre: 'Actualizar cita' },
  ];

}
