import { Animal } from "./Animal";

 export class Reptil extends Animal {
    private tipo_de_escamas: string;

    constructor(_tipo_de_escamas: string,
                _nome: string,
                _idade: number,
                _genero: string) {
        super(_nome, _idade, _genero);
        this.tipo_de_escamas = _tipo_de_escamas;
        }


        public getTipoDeEscamas(): string {
            return this.tipo_de_escamas;
        }
    
        public setTipoDeEscamas(_tipo_de_escamas: string): void {
            this.tipo_de_escamas = this.tipo_de_escamas;
        }
    }
    