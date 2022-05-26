import { by, element } from 'protractor';

export class CitaPage {
    private inputHoraCita = element(by.css('app-crear-cita #hora'));
    private inputPlacaCita = element(by.css('app-crear-cita #placa'));
    private inputFechaCita = element(by.css('app-crear-cita #fecha'));
    private guardarCita = element(by.css('app-crear-cita #button'));
    private inputIdCita = element(by.css('app-crear-cita #id'));
    private listarCita = element(by.css('app-listar-cita #button'));
    private inputFechaListarCita = element(by.css('app-listar-cita #fecha'));
    private listaCitas = element.all(by.css('app-listar-cita #items'));
    private inputIdCitaBorrar = element(by.css('app-borrar-cita #id'));
    private borrarCita = element(by.css('app-borrar-cita #button'));
    private inputActualizarHoraCita = element(by.css('app-actualizar-cita #hora'));
    private inputActualizarPlacaCita = element(by.css('app-actualizar-cita #placa'));
    private inputActualizarFechaCita = element(by.css('app-actualizar-cita #fecha'));
    private actualizarCita = element(by.css('app-actualizar-cita #button'));
    private inputActualizarIdCita = element(by.css('app-actualizar-cita #id'));

    getMensaje(selector: string) {
        return element(by.css(selector)).getText() as Promise<string>;
    }

    async clickBotonCrearCitas() {
        await this.guardarCita.click();
    }

    async clickBotonListarCitas() {
        await this.listarCita.click();
    }

    async ingresarId(idCita: string) {
        await this.inputIdCita.sendKeys(idCita);
    }

    async ingresarActualizarId(idCita: string) {
        await this.inputActualizarIdCita.sendKeys(idCita);
    }

    async ingresarIdBorrar(idCita: string) {
        await this.inputIdCitaBorrar.sendKeys(idCita);
    }

    async ingresarPlaca(placaCita: string) {
        await this.inputPlacaCita.sendKeys(placaCita);
    }
    async ingresarActualizarPlaca(placaCita: string) {
        await this.inputActualizarPlacaCita.sendKeys(placaCita);
    }

    async ingresarFecha(fechaCita: string) {
        await this.inputFechaCita.sendKeys(fechaCita);
    }
    async ingresarActualizarFecha(fechaCita: string) {
        await this.inputActualizarFechaCita.sendKeys(fechaCita);
    }

    async ingresarFechaListar(fechaCita: string) {
        await this.inputFechaListarCita.sendKeys(fechaCita);
    }

    async ingresarHora(horaCita: string) {
        await this.inputHoraCita.sendKeys(horaCita);
    }
    async ingresarActualizarHora(horaCita: string) {
        await this.inputActualizarHoraCita.sendKeys(horaCita);
    }

    async contarCitas() {
        return await this.listaCitas.count();
    }

    async clickBotonGuardarCita() {
        await this.guardarCita.click();
    }
    async clickBotonActualizarCita() {
        await this.actualizarCita.click();
    }

    async clickBotonBorrarCita() {
        await this.borrarCita.click();
    }
}
