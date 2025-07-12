import Cidade from "./cidade";

export default interface Bairro {
    id: number;
    nome: string;
    cidade: Cidade;
}