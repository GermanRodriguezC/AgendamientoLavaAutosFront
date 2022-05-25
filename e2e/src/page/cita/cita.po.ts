import { by, element } from 'protractor';

export class CitaPage {
    private linkCrearCita = element(by.id('linkCrearCita'));
    private linkListarCitas = element(by.id('linkListarCita'));
    private inputIdCita = element(by.id('idCita'));
    private inputDescripcionCita = element(by.id('descripcionCita'));
    private listaCitas = element.all(by.css('ul.citas li'));

    async clickBotonCrearCitas() {
        await this.linkCrearCita.click();
    }

    async clickBotonListarCitas() {
        await this.linkListarCitas.click();
    }

    async ingresarId(idCita) {
        await this.inputIdCita.sendKeys(idCita);
    }

    async ingresarDescripcion(descripcionCita) {
        await this.inputDescripcionCita.sendKeys(descripcionCita);
    }

    async contarCitas() {
        return this.listaCitas.count();
    }
}
