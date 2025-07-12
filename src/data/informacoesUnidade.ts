import Endereco from "./endereco";
import UnidadeSaudeDTO from "./unidadesdto";

export default interface InformacoesUnidade {
    id: number;
    nome: string;
    imagem_url: string;
    telefone: string;
    endereco: Endereco;
    unidade: UnidadeSaudeDTO;
}