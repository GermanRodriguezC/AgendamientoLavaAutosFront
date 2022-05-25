import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CitaPage } from '../page/cita/cita.po';

describe('workspace-project Cita', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cita: CitaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cita = new CitaPage();
    });

    it('Deberia crear cita', () => {
        const ID_PRODUCTO = '001';
        const DESCRIPCION_PRODUCTO = 'Cita de pruebas';

        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonCrearCitas();
        cita.ingresarId(ID_PRODUCTO);
        cita.ingresarDescripcion(DESCRIPCION_PRODUCTO);

    });

    it('Deberia listar citas', () => {
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();

        expect(4).toBe(cita.contarCitas());
    });
});
