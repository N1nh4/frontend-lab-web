'use client'; 

import BarraTitulo from "@/components/barraTitulo";
import Cabecalho from "@/components/cabecalho";
import { useParams } from "next/navigation";
import React from "react"; 
import Image from "next/image";
import { UnidadeSaude, allUnidadesData } from '@/data/unidades'; 
import { renderStars, renderUserIcons } from "@/lib/utils/rendering";
import { Info, User } from "lucide-react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";

export default function UnidadeDetalhesPage() {
    const navLinks = [
        { id: 1, label: 'Registrar lotação', href: '/registrar-lotacao' },
        { id: 2, label: 'Ir para o mapa', href: '/mapa' },
        { id: 3, label: 'Ranking', href: '/ranking' },
        { id: 4, label: 'Entrar', href: '/entrar' },
        { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
        { id: 6, label: 'Criar conta', href: '/criar-conta' },
    ];

    const params = useParams();
    const unidadeId = params.id; // Obter o ID da unidade a partir dos parâmetros da URL (vem como string)

    // A busca da unidade é feita diretamente no array mockado
    // Em um cenário real, você faria uma chamada de API AQUI.
    const unidade: UnidadeSaude | undefined = allUnidadesData.find(u => u.id.toString() === unidadeId);

    // Se a unidade não for encontrada
    if (!unidade) {
        return (
            <main className="w-full min-h-screen flex flex-col items-center justify-center p-8">
                <h1 className="text-2xl font-bold text-red-600">Unidade não encontrada</h1>
                <p className="text-gray-600 mt-2">Verifique o ID da unidade na URL.</p>
            </main>
        );
    }

    // Renderiza a unidade
    return (
       <main className="w-full min-h-screen flex flex-col items-center justify-start ">
            <Cabecalho navLinks={navLinks} />
            <BarraTitulo titulo={unidade.titulo} />
            <div className="flex  w-3/5 p-8 text-verdeEscuro">
                <div className="flex w-2/5 mr-8">
                    <Image
                        src={unidade.imagem}
                        alt={unidade.titulo}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex flex-col justify-center text-lg  w-3/5 ">
                    <h2 className="text-2xl font-bold  mb-4">{unidade.titulo}</h2>
                    <div 
                        className="flex items-center mb-4"
                        onClick={() => alert('Avaliação clicada!')} // Exemplo de ação ao clicar
                    >
                        {renderStars(unidade.avaliacaoEstrela, 24)}
                        <span className="ml-2 text-xs text-gray-600">({unidade.avaliacaoEstrela})</span>
                        
                    </div>
                    <p className="mb-2"><span className="font-bold">Endereço:</span> {unidade.endereco}</p>
                    <p className="mb-2"><span className="font-bold">Telefone:</span> {unidade.telefone}</p>
                    <p className="flex mb-2 font-bold items-center">
                        Status: {unidade.status}
                    <AlertDialog >
                        <AlertDialogTrigger asChild>
                            <span className="cursor-pointer">
                                <Info size={12} color="black" className="ml-2 "/>
                            </span>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Como avaliar o Status de lotação?</AlertDialogTitle>
                                <AlertDialogDescription>
                                     
                                    <ul className="pl-5">
                                        <li className="flex items-center"><span className="flex items-center gap-1 font-bold text-emerald-500"> <User /> VAZIO</span>: O local está quase sem ninguém.</li>
                                        <li className="flex items-center"><span className="flex items-center gap-1 font-bold text-emerald-500"> <User /> POUCO VAZIO</span>: O local está com pouca gente.</li>
                                        <li className="flex items-center"><span className="flex items-center gap-1 font-bold text-amber-500"> <User /> MODERADO</span>: O local está com uma quantidade moderada de pessoas.</li>
                                        <li className="flex items-center"><span className="flex items-center gap-1 font-bold text-red-500"> <User /> CHEIO</span>: O local está cheio.</li>
                                        <li className="flex items-center"><span className="flex items-center gap-1 font-bold text-red-500"> <User /> MUITO CHEIO</span>: O local está muito cheio.</li>
                                    </ul>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="bg-gray-200 hover:bg-gray-300">Fechar</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    </p>
                  
                    <span className="flex">{renderUserIcons(unidade.status, 32)}</span>
                    <p className="italic text-xs"> {unidade.ultimaAtualizacao}</p>
                    
                    <button className="mt-4 h-10 font-bold bg-verdeEscuro text-white rounded-lg">RESGISTRAR LOTAÇÃO</button>
                </div>
            </div>
            <div>
                
            </div>
       </main>
    );
}