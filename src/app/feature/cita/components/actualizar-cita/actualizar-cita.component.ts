import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../shared/service/cita.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


const LONGITUD_MINIMA_PERMITIDA_FECHA = 10;
const LONGITUD_MAXIMA_PERMITIDA_FECHA = 10;

@Component ({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit{
  citaForm: FormGroup;
  cita: Object;
  mensaje: string;
  show: boolean;
  constructor(public citaService: CitaService) { }

  ngOnInit() {
    this.construirFormularioCita();
  }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      placa: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_FECHA),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_FECHA)]),
      hora: new FormControl('', [Validators.required])                                                    
    });
  }
  onSubmit() {
      this.citaService.actualizar(this.citaForm.value)
      .subscribe(
        response => {this.cita = response,
                      this.show=true},
        err => {this.mensaje = err["error"].mensaje, this.show=false}
        );
  };

}
