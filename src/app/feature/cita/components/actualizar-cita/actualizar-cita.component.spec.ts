import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { ActualizarCitaComponent } from './actualizar-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CitaService } from '@cita/shared/service/cita.service';
import { of, throwError } from 'rxjs';
import { HttpService } from '@core/services/http.service';

describe('ActualizarCitaComponent', () => {
  let component: ActualizarCitaComponent;
  let fixture: ComponentFixture<ActualizarCitaComponent>;
  let citaService: CitaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CitaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.citaForm.valid).toBeFalsy();
  });

  it('Actualizando cita', () => {
    spyOn(citaService, 'actualizar').and.returnValue(of(true));
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.id.setValue('1');
    component.citaForm.controls.hora.setValue('15:00');
    component.citaForm.controls.placa.setValue('BVB595');
    component.citaForm.controls.fecha.setValue('02/02/2022');
    expect(component.citaForm.valid).toBeTrue();

    component.onSubmit();
    expect(citaService.actualizar).toHaveBeenCalled();
  });

  it('Generando un error en Actualización de cita', () => {
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.id.setValue('1');
    component.citaForm.controls.hora.setValue('15:00');
    component.citaForm.controls.placa.setValue('595');
    component.citaForm.controls.fecha.setValue('02/02/2022');
    expect(component.citaForm.valid).toBeFalsy();

    spyOn(citaService,'actualizar').and.returnValue(throwError('error'));
    component.onSubmit();
    expect(component.show).toBeFalsy();
  });

});
