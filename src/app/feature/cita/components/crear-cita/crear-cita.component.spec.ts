import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { CrearCitaComponent } from './crear-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CitaService } from '../../shared/service/cita.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService: CitaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CitaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    fixture.detectChanges();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.citaForm.valid).toBeFalsy();
  });

  it('Registrando cita', () => {
    spyOn(citaService, 'guardar').and.returnValue(of(true));
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.hora.setValue('15:00');
    component.citaForm.controls.placa.setValue('BVB595');
    component.citaForm.controls.fecha.setValue('02/02/2022');
    expect(component.citaForm.valid).toBeTruthy();

    component.onSubmit();

  });

  it('Generando un error en Creación de cita', () => {
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.hora.setValue('15:00');
    component.citaForm.controls.placa.setValue('595');
    component.citaForm.controls.fecha.setValue('02/02/2022');
    expect(component.citaForm.valid).toBeFalsy();

    spyOn(citaService,'guardar').and.returnValue(throwError('error'));
    component.onSubmit();
    expect(component.show).toBeFalsy();
  });
});
