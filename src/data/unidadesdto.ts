import Avaliacao from "./avaliacao";
import Endereco from "./endereco";
import { StatusType } from "./unidades";

export default interface UnidadeSaudeDTO {
    id: number;
    nota: number;
    nome: string;
    status: StatusType;
    endereco: Endereco;
    telefone: string;
    imagemURL: string;
    ultimaAtualizacao: string;
    avalicao: Avaliacao;  
}
