import { Atracao } from "./Atracao";

/**
 * Classe que representa um Zoológico contendo uma lista de Atrações.
 */
export class Zoologico {
    // Propriedade privada que armazena o nome do zoológico.
    private nome: string;

    // Propriedade privada que armazena a lista de atrações no zoológico.
    private lista_de_atracoes: Array<Atracao>;

    /**
     * Construtor da classe Zoologico.
     * @param _nome O nome do zoológico.
     * @param _lista_de_atracoes A lista de Atrações no zoológico.
     */
    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>) {
        // Inicializa as propriedades do zoológico com os valores fornecidos.
        this.nome = _nome;
        this.lista_de_atracoes = _lista_de_atracoes;
    }

    /**
     * Obtém o nome do zoológico.
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do zoológico.
     * @param nome O nome a ser atribuído ao zoológico.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a lista de Atrações no zoológico.
     * @returns A lista de Atrações no zoológico.
     */
    public getListaDeAtracoes(): Array<Atracao> {
        return this.lista_de_atracoes;
    }

    /**
     * Define a lista de Atrações no zoológico.
     * @param lista_de_atracoes A lista de Atrações a ser atribuída ao zoológico.
     */
    public setListaDeAtracoes(lista_de_atracoes: Array<Atracao>): void {
        this.lista_de_atracoes = lista_de_atracoes;
    }
}