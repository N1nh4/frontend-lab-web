import Estado from "./estado";

export default interface Cidade {
    id: number;
    cidade: string;
    Estado: Estado;
}