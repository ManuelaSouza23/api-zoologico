import { Animal } from "./Animal";

/**
 * Classe que representa um Réptil, uma extensão da classe Animal.
 */
 export class Reptil extends Animal {

    /**
     * Propriedade privada que armazena o tipo de escamas do réptil.
     */
    private tipo_de_escamas: string;

    /**
     * Construtor da classe Reptil.
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     */
    constructor(_tipo_de_escamas: string, _nome: string, _idade: number, _genero: string) {
        // Chama o construtor da classe pai (Animal) para inicializar as propriedades básicas.
        super(_nome, _idade, _genero);
        
        // Inicializa a propriedade específica para Réptil.
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    /**
     * Obtém o tipo de escamas do réptil.
     * @returns O tipo de escamas do réptil.
     */
    public getTipo_de_escamas(): string {
        return this.tipo_de_escamas;
    }

    /**
     * Define o tipo de escamas do réptil.
     * @param tipo_de_escamas O tipo de escamas a ser atribuído ao réptil.
     */
    public setTipo_de_escamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;
    }
}