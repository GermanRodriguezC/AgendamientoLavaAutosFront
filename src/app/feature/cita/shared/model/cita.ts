export class Cita {
    id: string;
    placa: string;
    fecha: string;
    hora: string;
    valor: string;

    constructor(id: string, placa: string, fecha: string, hora: string, valor: string) {
        this.id = id;
        this.placa = placa;
        this.fecha = fecha;
        this.hora = hora;
        this.valor = valor;
    }

}
