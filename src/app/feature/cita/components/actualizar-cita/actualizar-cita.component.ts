import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


const LONGITUD_MINIMA_PERMITIDA_FECHA = 10;
const LONGITUD_MAXIMA_PERMITIDA_FECHA = 10;
const FORMATO_ID = '\\d*';
const FORMATO_PLACA = '^[A-Z0-9]{5,6}$';
const FORMATO_FECHA = '^([0-2][0-9]|3[0-1])(\/|\/)(0[1-9]|1[0-2])\\2(\\d{4})$';
const FORMATO_HORA = '([0-1][0-9]|2[0-3])(:)([0-5][0-9])$';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {
  citaForm: FormGroup;
  cita: object;
  mensaje: string;
  show: boolean;
  constructor(public citaService: CitaService) { }
  ngOnInit() { this.construirFormularioCita(); }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(FORMATO_ID)]),
      placa: new FormControl('', [Validators.required, Validators.pattern(FORMATO_PLACA)]),
      fecha: new FormControl('', [Validators.required, Validators.pattern(FORMATO_FECHA),
      Validators.minLength(LONGITUD_MINIMA_PERMITIDA_FECHA),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_FECHA)]),
      hora: new FormControl('', [Validators.required, Validators.pattern(FORMATO_HORA)])
    });
  }
  onSubmit() {
    this.citaService.actualizar(this.citaForm.value)
      .subscribe(
        response => {
          this.cita = response;
          this.show = true;
        },
        err => {
          this.mensaje = err[`error`].mensaje;
          this.show = false;
        }
      );
  }

}
