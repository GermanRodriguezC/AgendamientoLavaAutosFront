import { by, element } from 'protractor';

export class CitaPage {
    private listarCita = element(by.css('app-listar-cita #button'));
    private inputIdCita = element(by.css('app-crear-cita #id'));
    private inputPlacaCita = element(by.css('app-crear-cita #placa'));
    private inputFechaCita = element(by.css('app-crear-cita #fecha'));
    private inputFechaListarCita = element(by.css('app-listar-cita #fecha'));
    private inputHoraCita = element(by.css('app-crear-cita #hora'));
    private listaCitas = element.all(by.css('app-listar-cita #listaCitas'));
    private guardarCita = element(by.css('app-crear-cita #button'));

    getMensajeCrear(selector: string) {
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

    async ingresarPlaca(placaCita: string) {
        await this.inputPlacaCita.sendKeys(placaCita);
    }

    async ingresarFecha(fechaCita: string) {
        await this.inputFechaCita.sendKeys(fechaCita);
    }

    async ingresarFechaListar(fechaCita: string) {
        await this.inputFechaListarCita.sendKeys(fechaCita);
    }

    async ingresarHora(horaCita: string) {
        await this.inputHoraCita.sendKeys(horaCita);
    }

    async contarCitas() {
        return await this.listaCitas.count();
    }

    async clickBotonGuardarCita() {
        await this.guardarCita.click();
    }
}
