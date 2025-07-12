import Bairro from "./bairro";

export default interface Endereco {
    id: number;
    bairro: Bairro;
    rua: string;
    numero: string;
}