export class Cliente {
    constructor(
        public nombre: string,
        public apellido: string,
        public edad: number,
        public fechaNacimiento: number,
        public id?: number,
    ) {}
}
