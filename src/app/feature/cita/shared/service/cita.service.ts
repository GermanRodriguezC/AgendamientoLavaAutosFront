import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

@Injectable()
export class CitaService {

  public responseId: string;

  constructor(protected http: HttpService) {}

  public consultar(fecha: string) {
    const options = fecha ?
   { params: new HttpParams().set('fecha', fecha) } : {};
    return this.http.doGet<Cita[]>(`${environment.endpoint}/cita`, options);
  }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita>(`${environment.endpoint}/cita`, cita, this.http.optsName('crear cita'));
  }

  public actualizar(cita: Cita) {
    return this.http.doPut<Cita>(`${environment.endpoint}/cita/${cita.id}`, cita, this.http.optsName('actualizar cita'));
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/cita/${id}`, this.http.optsName('eliminar citas'));
  }
}
