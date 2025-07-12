import Comentario from "./comentario";


export default interface Avaliacao {
    id: number;
    comentario: Comentario;
    nota: number;
}