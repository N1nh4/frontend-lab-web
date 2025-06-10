'use client'; 

import BarraTitulo from "@/components/barraTitulo";
import Cabecalho from "@/components/cabecalho";
import { useParams } from "next/navigation"; 
import React, { useEffect } from "react"; 
import Image from "next/image";
import { allUnidadesData, UnidadeSaude } from '@/data/unidades'; 
import { User } from "lucide-react";



export default function RegistrarLotacaoPage() {
    const navLinks = [
        { id: 1, label: 'Registrar lotação', href: '/registrar-lotacao' },
        { id: 2, label: 'Ir para o mapa', href: '/mapa' },
        { id: 3, label: 'Ranking', href: '/ranking' },
        { id: 4, label: 'Entrar', href: '/entrar' },
        { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
        { id: 6, label: 'Criar conta', href: '/criar-conta' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const params = useParams();
    const unidadeId = params.id; // Pega o ID da unidade da URL

    const unidade: UnidadeSaude | undefined = allUnidadesData.find(u => u.id.toString() === unidadeId);

    if (!unidade) {
        return (
            <main className="w-full min-h-screen flex flex-col items-center justify-center p-8">
                <h1 className="text-2xl font-bold text-red-600">Erro: Unidade não encontrada</h1>
                <p className="text-gray-600">Verifique o ID na URL.</p>
            </main>
        );
    }

    return (
        <main className=" flex flex-col w-full h-full bg-gray-100 ">
            <Cabecalho navLinks={navLinks} />
            <BarraTitulo titulo={`REGISTRAR LOTAÇÃO `} /> 

            <div className="flex flex-col w-full flex-grow overflow-y-auto">
                <div className="flex h-3/4 justify-between ">
                    <div className="flex h-full ">
                        <Image 
                            src={"/images/upa.png"}
                            alt={"teste"}
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="w-full h-full object-contain"
                            
                        /> 
                    </div>
                    <div className="flex h-full">
                        <div className="flex flex-col justify-center py-8 gap-2 text-xl">
                            <h1 className="text-verdeEscuro font-bold text-3xl">Informações da unidade</h1>
                            <h2 className="text-verdeEscuro font-bold text-2xl">{unidade.titulo}</h2>
                            <span>Endereço: {unidade.endereco}</span>
                            <span>Telefone: {unidade.telefone}</span>
                            <span className="font-bold">Status: {unidade.status}</span>
                            <span className="italic">{unidade.ultimaAtualizacao}</span>
                            
                        </div>
                    </div>
                    <div className="flex flex-col bg-verdePastel shadow-md rounded-2xl  m-4">
                        <span className="bg-[#0E6F4C] py-2 pl-4 text-white rounded-t-2xl font-bold">Como avaliar o Status de lotação?</span>
                        <div className="flex flex-1 justify-center items-center">
                            <ul className="flex flex-col justify-center  pl-5 p-4 gap-4 text-zinc-500 font-bold ">
                                <li className="flex items-center gap-2"> <User stroke="#0E6F4C"/> VAZIO- está quase sem ninguém.</li>
                                <li className="flex items-center gap-2"> <User stroke="#0E6F4C"/> POUCO VAZIO- está com pouca gente.</li>
                                <li className="flex items-center gap-2"> <User stroke="#0E6F4C"/> MODERADO- está com quantidade <br /> moderada de pessoas.</li>
                                <li className="flex items-center gap-2"> <User stroke="#0E6F4C"/> CHEIO- está cheio.</li>
                                <li className="flex items-center gap-2"> <User stroke="#0E6F4C" /> MUITO CHEIO- está muito cheio.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-verdeEscuro h-1/2 px-8 py-4">
                    <span 
                        className="italic text-white  text-2xl"
                        
                    >Confirme os dados da unidade e Selecione o Status de lotação:</span>
                    
                    <div className="flex items-center justify-center gap-8 mt-6">
                        <User size={64}/><User size={64}/><User size={64}/><User size={64}/><User size={64}/>
                    </div>
                    <div className="flex justify-center gap-12 mt-4">
                        <button className="bg-white text-verdeEscuro rounded-2xl h-12 w-48 font-bold">CANCELAR</button>
                        <button className="bg-white text-verdeEscuro rounded-2xl h-12 w-48 font-bold">ENVIAR</button>
                    </div>
                     
                </div>
            </div>
        </main>
    );
}