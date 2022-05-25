import { AppPage } from '../app.po';
import { CitaPage } from '../page/cita/cita.po';

describe('workspace-project Cita', () => {
    let page: AppPage;
    let cita: CitaPage;

    beforeEach(() => {
        page = new AppPage();
        cita = new CitaPage();
    });

    it('Deberia crear cita', async () => {
        page.navigateToCita('/crear');
        const HORA = '12:00';
        const PLACA = 'ABC123';
        const FECHA = '02/02/2022';

        await cita.ingresarPlaca(PLACA);
        await cita.ingresarFecha(FECHA);
        await cita.ingresarHora(HORA);
        await cita.clickBotonGuardarCita();
        expect(cita.getMensajeCrear('app-crear-cita h1')).toContain('La cita se creó satisfactoriamente con el Id:');
    });

    it('Deberia listar citas', async () => {
        page.navigateToCita('/listar');
        const FECHA = '04/02/2022';

        await cita.ingresarFechaListar(FECHA);
        await cita.clickBotonListarCitas();
        expect(0).toBe(await cita.contarCitas());
        expect(cita.getMensajeCrear('app-listar-cita h1')).toEqual('No se encontró ninguna cita para esa fecha.');
    });

});
