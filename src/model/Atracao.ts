import { Habitat } from "./Habitat";

export class Atracao {
    private nome: string;
    private habitats: Array<Habitat>;

    constructor(_nome: string, _habitats: Array<Habitat>) {
        this.nome = _nome;
        this.habitats = _habitats;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getHabitats(): Array<Habitat> {
        return this.habitats;
    }

    public setHabitats(habitats: Array<Habitat>): void {
        this.habitats = habitats;
    }
}