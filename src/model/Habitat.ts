import { Animal } from "./Animal";

/**
 * Classe que representa um habitat para animais.
 */
export class Habitat {
    /**
     * Propriedade privada que armazena o nome do habitat.
     */
    private nome: string;

    /**
     * Propriedade privada que armazena a lista de animais no habitat.
     */
    private listaAnimais: Array<Animal>;

    /**
     * Construtor da classe Habitat.
     * @param _nome O nome do habitat.
     * @param _listaAnimais A lista de animais no habitat.
     */
    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        // Inicializa as propriedades do habitat com os valores fornecidos.
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /**
     * Obtém o nome do habitat.
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do habitat.
     * @param nome O nome a ser atribuído ao habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a lista de animais no habitat.
     * @returns A lista de animais no habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais;
    }

    /**
     * Define a lista de animais no habitat.
     * @param _listaAnimais A lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(_listaAnimais: Array<Animal>): void {
        // Atualiza a lista de animais no habitat com a lista fornecida.
        this.listaAnimais = _listaAnimais;
    }
}