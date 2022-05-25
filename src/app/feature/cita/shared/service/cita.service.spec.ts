import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CitaService } from './cita.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Cita } from '../model/cita';
import { HttpResponse } from '@angular/common/http';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCita = `${environment.endpoint}/cita`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const citaService: CitaService = TestBed.inject(CitaService);
    expect(citaService).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const dummyCitas = [
      new Cita('1', 'ABC123', '03/02/2022', '12:30', '100000'), new Cita('2', 'ABD123', '03/02/2022', '12:30', '100000')
    ];
    service.consultar('03/02/2022').subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });
    const req = httpMock.expectOne(`${apiEndpointCita}?fecha=03/02/2022`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });

  it('deberia crear un cita', () => {
    const dummyCita = new Cita('1', 'ABC123', '02/02/2022', '12:30', '100000');
    service.guardar(dummyCita).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCita);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar una cita', () => {
    const dummyCita = new Cita('1', 'ABC123', '02/02/2022', '12:30', '100000');
    service.eliminar(Number(dummyCita.id)).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCita}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia actualizar un cita', () => {
    const dummyCita = new Cita('1', 'ABC123', '02/02/2022', '12:30', '100000');
    service.actualizar(dummyCita).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyCita);
    });
    const req = httpMock.expectOne(`${apiEndpointCita}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<Cita>({body: dummyCita}));
  });
});
