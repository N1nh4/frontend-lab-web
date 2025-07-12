import { StatusType } from "./unidades";

export default interface AtualizacaoDTO {
    status: StatusType;
    usuarioId: number;
    unidadeId: number;
}