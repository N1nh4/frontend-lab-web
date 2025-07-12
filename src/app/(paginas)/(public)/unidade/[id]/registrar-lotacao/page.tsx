'use client'; 

import BarraTitulo from "@/components/barraTitulo";
import Cabecalho from "@/components/cabecalho";
import { useParams } from "next/navigation"; 
import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import { allUnidadesData, UnidadeSaude, StatusEnum } from '@/data/unidades'; 
type StatusEnumType = (typeof StatusEnum)[keyof typeof StatusEnum];
import { Bell, Clock, MapPinHouse, Phone, PhoneCall, User, Users } from "lucide-react";
import UnidadePaginaDTO from "@/data/unidadePaginaDTO";
import { buscarInformacoesDaUnidade,  getUnidade, registrarAtualizacaoCompleta } from "@/service/unidade";
import { divIcon } from "leaflet";
import Usuario from "@/data/usuario";
import { useUsuario } from "@/data/context/UsuarioContexto";




export default function RegistrarLotacaoPage() {
    const navLinks = [
        { id: 1, label: 'Registrar lotação', href: '/' },
        { id: 2, label: 'Ir para o mapa', href: '/mapa' },
        { id: 3, label: 'Ranking', href: '/ranking' },
        { id: 4, label: 'Entrar', href: '/entrar' },
        { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
        { id: 6, label: 'Criar conta', href: '/criar-conta' },
        { id: 7, label: 'Configurações', href: '/perfil' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //const [selecionarStatus, setSelecionarStatus] = useState<StatusEnumType | null>(null);

    const getSelecionarIndex = (status: StatusEnumType | null): number => {
        if (status === null) return -1;
        return Object.values(StatusEnum).indexOf(status);
    };

    const { usuarioAtual } = useUsuario();

  
    const params = useParams();
    const unidadeId = params.id; // Pega o ID da unidade da URL
    const [unidade, setUnidade] = useState<UnidadePaginaDTO | null>(null);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const fetchData = async (id: number) => {
            const resposta = await getUnidade(id)
            
            console.log("Dado: " + resposta)
            setUnidade(resposta);
            setLoading(false);
        }

        if (typeof unidadeId === 'string') {
            fetchData(parseInt(unidadeId));
        }
    }, [unidadeId])

    const statusArray = [ 'VAZIO', 'POUCO_VAZIO', 'MODERADO', 'CHEIO', 'MUITO_CHEIO'];

    
    const totalIcons = statusArray.length; 
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    
    // Função para retornar a cor com base na quantidade dos icones
    const getColor = (index: number) => {
        if (index <= 1) return "#0E6F4C"; 
        if (index === 2) return "#fe9a2e"; 
        return "#fb2c36"; 
    };
    
    const [statusSelecionado, setStatusSelecionado] = useState('SEM_INFORMACAO'); // Estado para armazenar o status selecionado
    useEffect(() => {
        if (selectedIndex !== null) {
            setStatusSelecionado(statusArray[selectedIndex]);
        }
    }, [selectedIndex]);

    //const unidadeId = 1; // substitua pelo id da unidade atual (exemplo)

    const enviarAtualizacao = async () => {
    if (typeof unidadeId !== 'string') {
        alert("ID da unidade inválido");
        return;
    }
    const idNum = parseInt(unidadeId);
    if (isNaN(idNum)) {
        alert("ID da unidade inválido");
        return;
    }

    try {
        const resposta = await registrarAtualizacaoCompleta(
            statusSelecionado,
            usuarioAtual.idUsuario,
            idNum
        );
        console.log('Resposta do backend:', resposta);
        
        if (resposta?.statusUnidadeAtualizado) {
            console.log('Status atualizado recebido?', resposta.statusUnidadeAtualizado);
            setUnidade(prev => prev ? {...prev, status: resposta.statusUnidadeAtualizado } : prev);
        }
        alert('Atualização enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar atualização:', error);
        alert('Erro ao enviar atualização.');
    }
};
   

    
    const buscarInformacao = () => {
        const fetchDados = async () => {
            const resposta = await buscarInformacoesDaUnidade(atualizacao);
            
            console.log("Dado: " + resposta)
        }

        fetchDados();
    }


    const atualizacao = {
        id: 0,
        nome: "Alana",
        dataHora: new Date(),
        status: StatusEnum.CHEIO,
    }

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
                    <div className="flex h-full items-center justify-center max-h-96 w-[300px]">
                        <Image 
                            src={unidade.imagemURL}
                            alt={"teste"}
                            width={300}
                            height={240}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="w-full h-full object-cover max-h-96"
                            // MUDAR ESSA ALTURA MAXIMA
                            
                        /> 
                    </div>
                    <div className="flex h-full">
                        <div className="flex flex-col justify-center py-8 gap-2 text-xl">
                            <h1 className="text-verdeEscuro font-bold text-3xl mb-4">Informações da unidade</h1> 
                            <h2 className="text-verdeEscuro font-bold text-2xl">{unidade.nome}</h2>
                            <span className="flex items-center italic text-verdeEscuro "> <span > Ative as notificações dessa unidade</span> <Bell className="ml-2 flex flex-row" size={24} /></span>
                            <span className="flex items-center"> <span className="mr-2"> <MapPinHouse /> </span> Endereço: {String(unidade.endereco.bairro.nome)} - {String(unidade.endereco.rua)}</span>
                            <span className="flex items-center"> <span className="mr-2"> <Phone /> </span> Telefone: {unidade.telefone}</span>
                            <span className="flex items-center font-bold"> <span className="mr-2"> <Users /> </span> Status: {unidade.status.split("_").join(" ")}</span>
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
                <div className="bg-verdeEscuro h-2/3 px-8 py-4 flex flex-col justify-between gap-2">
                    <span 
                        className="italic text-white text-2xl"
                    >Confirme os dados da unidade e Selecione o Status de lotação:</span>
                    
                    <div className="flex gap-4 items-center justify-center">
                        {[...Array(totalIcons)].map((_, index) => {
                            const activeIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
                            const isHighlighted = activeIndex !== null && index <= activeIndex;
                            const color = isHighlighted ? getColor(activeIndex!) : "#999999"

                            return (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => {
                                        setSelectedIndex(index)
                                        alert(`Status selecionado: ${statusArray[index]}`);

                                    }
                                    }

                                    className="cursor-pointer"

                                >
                                    <User size={64} stroke={color} />
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center gap-12 "> 
                        <button className="bg-white text-verdeEscuro rounded-2xl h-12 w-48 font-bold">CANCELAR</button>
                        <button onClick={enviarAtualizacao} className="bg-white text-verdeEscuro rounded-2xl h-12 w-48 font-bold">ENVIAR</button>
                    </div>
                </div>
            </div>
        </main>
    );
}