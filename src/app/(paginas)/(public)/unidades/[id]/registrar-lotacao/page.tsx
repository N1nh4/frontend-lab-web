'use client'; 

import BarraTitulo from "@/components/barraTitulo";
import Cabecalho from "@/components/cabecalho";
import { useParams } from "next/navigation"; 
import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import { allUnidadesData, UnidadeSaude, StatusEnum } from '@/data/unidades'; 
type StatusEnumType = (typeof StatusEnum)[keyof typeof StatusEnum];
import { Clock, MapPinHouse, Phone, PhoneCall, User, Users } from "lucide-react";



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

    const [selecionarStatus, setSelecionarStatus] = useState<StatusEnumType | null>(null);

    const getSelecionarIndex = (status: StatusEnumType | null): number => {
        if (status === null) return -1;
        return Object.values(StatusEnum).indexOf(status);
    };

  
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
                <div className="flex h-2/3 justify-between ">
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
                            <h1 className="text-verdeEscuro font-bold text-3xl mb-4">Informações da unidade</h1> 
                            <h2 className="text-verdeEscuro font-bold text-2xl">{unidade.titulo}</h2>
                            <span className="flex items-center"> <span className="mr-2"> <MapPinHouse /> </span> Endereço: {unidade.endereco}</span>
                            <span className="flex items-center"> <span className="mr-2"> <Phone /> </span> Telefone: {unidade.telefone}</span>
                            <span className="flex items-center font-bold"> <span className="mr-2"> <Users /> </span> Status: {unidade.status}</span>
                            <span className="italic flex items-center"> <span className="mr-2"> <Clock /> </span> {unidade.ultimaAtualizacao}</span>
                            
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col bg-verdePastel shadow-md rounded-2xl  mr-10 m-4 max-h-80">
                            <span className="bg-[#0E6F4C] py-2 pl-4 text-white rounded-t-2xl font-bold">Como avaliar o Status de lotação?</span>
                            <div className="flex flex-1 justify-center items-center">
                                <ul className="flex flex-col justify-center  pl-5 p-4 gap-4 text-zinc-500 font-bold ">
                                    <li className="flex items-center gap-2"> <User stroke="#0E6F4C"/> VAZIO- está quase sem ninguém.</li>
                                    <li className="flex items-center gap-2"> <User stroke="#0E6F4C"/> POUCO VAZIO- está com pouca gente.</li>
                                    <li className="flex items-center gap-2"> <User stroke="#fe9a2e"/> MODERADO- está com quantidade <br /> moderada de pessoas.</li>
                                    <li className="flex items-center gap-2"> <User stroke="#fb2c36"/> CHEIO- está cheio.</li>
                                    <li className="flex items-center gap-2"> <User stroke="#fb2c36" /> MUITO CHEIO- está muito cheio.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-verdeEscuro h-2/5 px-8 py-4 flex flex-col justify-between">
                    <span 
                        className="italic text-white text-2xl"
                    >Confirme os dados da unidade e Selecione o Status de lotação:</span>
                    
                    <div className="flex-grow flex items-center justify-center gap-8">
                        
                        <User stroke={"#0E6F4C"} size={64}/><User stroke={"#0E6F4C"} size={64}/><User stroke={"#999999"} size={64}/><User stroke={"#999999"} size={64}/><User stroke={"#999999"} size={64}/>    
                    </div> 
                    <div className="flex justify-center gap-12 "> 
                        <button className="bg-white text-verdeEscuro rounded-2xl h-12 w-48 font-bold">CANCELAR</button>
                        <button className="bg-white text-verdeEscuro rounded-2xl h-12 w-48 font-bold">ENVIAR</button>
                    </div>
                </div>
            </div>
        </main>
    );
}