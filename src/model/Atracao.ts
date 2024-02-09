import { Habitat } from "./Habitat";

/**
 * Classe que representa uma Atração que contém uma lista de Habitats.
 */
export class Atracao {
    // Propriedades privadas que armazenam informações sobre a atração.
    private nome: string;
    private listaHabitats: Array<Habitat>;

    /**
     * Construtor da classe Atracao.
     * @param _nome O nome da atração.
     * @param _listaHabitats A lista de Habitats na atração.
     */
    constructor(_nome: string, _listaHabitats: Array<Habitat>) {
        // Inicializa as propriedades da atração com os valores fornecidos.
        this.nome = _nome;
        this.listaHabitats = _listaHabitats;
    }

    /**
     * Obtém o nome da atração.
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome da atração.
     * @param nome O nome a ser atribuído à atração.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a lista de habitats na atração.
     * @returns A lista de habitats na atração.
     */
    public getListaHabitats(): Array<Habitat> {
        return this.listaHabitats;
    }

    /**
     * Define a lista de habitats na atração.
     * @param _listaHabitats Lista de Habitats a ser atribuída à atração.
     */
    public setListaHabitats(_listaHabitats: Array<Habitat>): void {
        this.listaHabitats = _listaHabitats;
    }
}