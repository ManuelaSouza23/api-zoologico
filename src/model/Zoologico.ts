import { Atracao } from "./Atracao";

 export class Zoologico {
    private nome: string;
    private lista_de_atracoes: Array<Atracao>;

    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>) {
        this.nome = _nome;
        this.lista_de_atracoes = _lista_de_atracoes;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getListaDeAtracoes(): Array<Atracao> {
        return this.lista_de_atracoes;
    }

    public setListaDeAtracoes(lista_de_atracoes: Array<Atracao>): void {
        this.lista_de_atracoes = lista_de_atracoes;
    }
}