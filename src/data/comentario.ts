import Cliente from "./cliente";

export default interface Comentario {
    id: number;
    cliente: Cliente;
    texto: string;
    data: string;
}