import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { BorrarCitaComponent } from './borrar-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CitaService } from '@cita/shared/service/cita.service';
import { HttpService } from 'src/app/core/services/http.service';
import { of, throwError } from 'rxjs';

describe('BorrarCitaComponent', () => {
  let component: BorrarCitaComponent;
  let fixture: ComponentFixture<BorrarCitaComponent>;
  let citaService: CitaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BorrarCitaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [HttpService, CitaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCitaComponent);
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

  it('Eliminando cita', () => {
    spyOn(citaService, 'eliminar').and.returnValue(of(true));
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.id.setValue('2');
    expect(component.citaForm.valid).toBeTruthy();

    component.onSubmit(component.citaForm);
  });

  it('Generando un error en la Eliminación de la cita', () => {
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.id.setValue('');
    expect(component.citaForm.valid).toBeFalsy();
    spyOn(citaService, 'eliminar').and.returnValue(throwError('error'));
    component.onSubmit(component.citaForm);
    expect(component.show).toBeFalsy();
  });

});

