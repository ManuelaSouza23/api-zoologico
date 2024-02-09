import { Animal } from "./Animal";

/**
 * Classe que representa uma Ave, uma extensão da classe Animal.
 */
export class Ave extends Animal {
    // Método estático (não relacionado ao objeto de instância) que não foi implementado.
    static push(novaAve: Ave) {
        throw new Error("Method not implemented.");
    }

    // Propriedade privada que armazena a envergadura da ave.
    private envergadura: number;

    /**
     * Construtor da classe Ave.
     * @param _envergadura A envergadura da ave.
     * @param _nome O nome da ave.
     * @param _idade A idade da ave.
     * @param _genero O gênero da ave.
     */
    constructor(_envergadura: number, _nome: string, _idade: number, _genero: string) {
        // Chama o construtor da classe pai (Animal) para inicializar as propriedades básicas.
        super(_nome, _idade, _genero);
        
        // Inicializa a propriedade específica para Ave.
        this.envergadura = _envergadura;
    }

    /**
     * Obtém a envergadura da ave.
     * @returns A envergadura da ave.
     */
    public getEnvergdura(): number {
        return this.envergadura;
    }

    /**
     * Define a envergadura da ave.
     * @param envergadura A envergadura a ser atribuída à ave.
     */
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }
}