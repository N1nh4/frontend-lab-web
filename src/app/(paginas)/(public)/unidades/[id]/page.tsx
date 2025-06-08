"use client";
import { useParams } from "next/navigation";
import React from "react";

const StatusEnum = {
    VAZIO: "VAZIO",
    POUCO_VAZIO: "POUCO VAZIO",
    MODERADO: "MODERADO",
    CHEIO: "CHEIO",
    MUITO_CHEIO: "MUITO CHEIO",
  }

const cards = [
    {
      id: 1,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
];

export default function UnidadeDetalhesPage() {
    const params = useParams();
    const unidadeId = params.id; // Obter o ID da unidade a partir dos parâmetros da URL

    const unidade = cards.find((card) => card.id.toString() === unidadeId);

    if (!unidade) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Unidade não encontrada</h1>
                <p className="text-gray-600">Verifique o ID da unidade</p>
            </div>
        );
    }

    return (
        <main className="w-full min-h-screen p-8">
            <h1 className="text-4xl font-bold text-verdeEscuro mb-6">{unidade.titulo}</h1>
            <p className="text-xl text-gray-700 mb-2">Endereço: {unidade.endereco}</p>
            <p className="text-xl text-gray-700 mb-2">Telefone: {unidade.telefone}</p>
            <p className="text-xl text-gray-700 mb-2">Status: {unidade.status}</p>
            {/* ... Renderize a imagem, comentários, etc. conforme a segunda foto ... */}
            <img src={unidade.imagem} alt={unidade.titulo} width={500} height={300} className="my-4" />

            <div className="mt-8">
                <h2 className="text-3xl font-semibold text-verdeEscuro mb-4">Comentários</h2>
                {/* Aqui você adicionaria a UI para comentários */}
                <p>Adicione um comentário...</p>
                {/* Exemplo de comentário simulado */}
                <div className="border p-4 mt-4 rounded-lg bg-gray-50">
                    <p className="font-bold">Roberto Dias</p>
                    <p className="text-gray-800">Lugar péssimo odiei, muito lotado atendimento péssimo nunca mais volto para esse lugar. Não recomendaria nem para o meu pior inimigo desse universo. Não venha, repito não venha nunca nesse lugar fedorento.</p>
                    <p className="text-sm text-gray-500 mt-2">há 2 dias</p>
                </div>
            </div>
        </main>
        
    );
}