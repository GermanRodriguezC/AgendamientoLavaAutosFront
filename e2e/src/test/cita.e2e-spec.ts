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
        expect(cita.getMensaje('app-crear-cita h1')).toContain('La cita se creó satisfactoriamente con el Id:');
    });

    it('Deberia listar citas', async () => {
        page.navigateToCita('/listar');
        const FECHA = '02022022';
        await cita.ingresarFechaListar(FECHA);
        await cita.clickBotonListarCitas();
        expect(await cita.contarCitas() > 0).toBe(true);
    });

    it('No deberia encontrar citas agendadas para la fecha asignada', async () => {
        page.navigateToCita('/listar');
        const FECHA = '04022022';
        await cita.ingresarFechaListar(FECHA);
        await cita.clickBotonListarCitas();
        expect(0).toBe(await cita.contarCitas());
        expect(cita.getMensaje('app-listar-cita h1')).toEqual('No se encontró ninguna cita para esa fecha.');
    });

    it('Deberia borrar la cita', async () => {
        page.navigateToCita('/borrar');
        const id = '1';
        await cita.ingresarIdBorrar(id);
        await cita.clickBotonBorrarCita();
        expect(cita.getMensaje('app-borrar-cita h1')).toContain('Se eliminó satisfactoriamente la cita con el id:');
    });

    it('Debería actualizar cita ', async () => {
        page.navigateToCita('/actualizar');
        const ID = '2';
        const HORA = '12:00';
        const PLACA = 'ABC123';
        const FECHA = '02/02/2022';
        await cita.ingresarActualizarId(ID);
        await cita.ingresarActualizarPlaca(PLACA);
        await cita.ingresarActualizarFecha(FECHA);
        await cita.ingresarActualizarHora(HORA);
        await cita.clickBotonActualizarCita();
        expect(ID).toContain(await cita.getMensaje('app-actualizar-cita #idActualizado'));
        expect(PLACA).toContain(await cita.getMensaje('app-actualizar-cita #placaActualizada'));
        expect(FECHA).toContain(await cita.getMensaje('app-actualizar-cita #fechaActualizada'));
        expect(HORA).toContain(await cita.getMensaje('app-actualizar-cita #horaActualizada'));
    });

});
