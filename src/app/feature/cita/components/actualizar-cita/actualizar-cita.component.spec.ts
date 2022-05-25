import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { ActualizarCitaComponent } from './actualizar-cita.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CitaService } from '@cita/shared/service/cita.service';
import { of } from 'rxjs';
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
    spyOn(citaService, 'actualizar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
