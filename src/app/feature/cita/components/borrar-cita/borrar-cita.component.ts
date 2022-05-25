import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '@cita/shared/service/cita.service';

@Component({
  selector: 'app-borrar-cita',
  templateUrl: './borrar-cita.component.html',
  styleUrls: ['./borrar-cita.component.css']
})
export class BorrarCitaComponent implements OnInit {
  citaForm: FormGroup;
  id: string;
  mensaje: string;
  show: boolean;

  constructor(protected citaService: CitaService) { }

  ngOnInit() {
    this.construirFormularioCita();
  }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      id: new FormControl('', [Validators.pattern('\\d*')])
    });
  }
  
  onSubmit(form: FormGroup) {
    this.citaService.eliminar(form.value.id).subscribe(
      response => {
        this.show = true;
        this.id = response['valor'];
        this.mensaje = 'Se eliminó satisfactoriamente la cita con el id: ' + this.id;
      },
      err => { 
        this.mensaje = err['error'].mensaje;
        this.show = false;
     }
    );
  }

}
