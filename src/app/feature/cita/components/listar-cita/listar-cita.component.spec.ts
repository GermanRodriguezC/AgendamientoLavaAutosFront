import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitaComponent } from './listar-cita.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CitaService } from '../../shared/service/cita.service';
import { Cita } from '../../shared/model/cita';
import { HttpService } from 'src/app/core/services/http.service';
import { of, throwError } from 'rxjs';

describe('ListarCitaComponent', () => {
  let component: ListarCitaComponent;
  let fixture: ComponentFixture<ListarCitaComponent>;
  let citaService: CitaService;
  let datepipe: DatePipe;
  const listaCitas: Cita[] = [new Cita('100', 'ABC123', '02/02/2022', '12:30', '100000'), new Cita('200', 'ABD123', '02/02/2022', '12:30', '100000')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCitaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CitaService, HttpService, DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    datepipe = TestBed.inject(DatePipe);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(datepipe.transform('2022-02-02','dd/MM/yyyy')).toBe('02/02/2022');
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.citaForm.valid).toBeFalsy();
  });

  it('Consultando citas', () => {
    spyOn(citaService, 'consultar').and.returnValue(of(listaCitas));
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.fecha.setValue('02/02/2022');
    expect(component.citaForm.valid).toBeTrue();

    component.onSubmit(component.citaForm);
    
  });

  it('Generando un error en Consulta de citas', () => {
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.fecha.setValue('');
    expect(component.citaForm.valid).toBeFalsy();

    spyOn(citaService,'consultar').and.returnValue(throwError('error'));
    component.onSubmit(component.citaForm);
    expect(component.show).toBeFalsy();
  });

});
