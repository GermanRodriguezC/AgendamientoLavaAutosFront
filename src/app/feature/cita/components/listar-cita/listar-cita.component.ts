import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CitaService } from '@cita/shared/service/cita.service';
import { Cita } from '@cita/shared/model/cita';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})

export class ListarCitaComponent implements OnInit {
  citaForm: FormGroup;
  public listaCitas: Observable<Cita[]>;
  fecha: string;
  show: boolean;
  mensaje: string;

  constructor(protected citaService: CitaService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.construirFormularioCita();
  }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      fecha: new FormControl('', [Validators.required])
    });
  }

  onSubmit(form: FormGroup) {
    this.listaCitas = this.citaService.consultar(this.datepipe.transform(form.value.fecha, 'dd/MM/yyyy'));
    this.listaCitas.subscribe(
      (response) => {
          if (response.length > 0) {
            this.show = true;
          } else {
            this.show = false;
            this.mensaje = 'No se encontró ninguna cita para esa fecha.';
          }
        },
        err => {this.mensaje = err[`error`].mensaje;
                this.show = false;
      }
    );
  }

}
