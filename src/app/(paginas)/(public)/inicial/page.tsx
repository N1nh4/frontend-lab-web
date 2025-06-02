import Cabecalho from "@/components/cabecalho";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search, Star, User, Maximize2 } from "lucide-react";

export default function Inicial() {
  const navLinks = [
    { id: 1, label: 'Registrar lotação', href: '/registrar-lotacao' },
    { id: 2, label: 'Ir para o mapa', href: '/mapa' },
    { id: 3, label: 'Ranking', href: '/ranking' },
    { id: 4, label: 'Entrar', href: '/entrar' },
    { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
    { id: 6, label: 'Criar conta', href: '/criar-conta' },
  ];

  const StatusEnum = {
    CHEIO: "CHEIO",
    VAZIO: "VAZIO",
    MODERADO: "MODERADO",
  }

  const cards = [
    {
      id: 1,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.CHEIO,
      capacidade: 3.0,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.jpeg",
    },
    {
      id: 2,
      titulo: "Hospital Municipal",
      avaliacaoEstrela: 3.5,
      endereco: "Avenida Central, 456",
      telefone: "(71) 9876-5432",
      status: StatusEnum.VAZIO,
      capacidade: 1.0,
      ultimaAtualizacao: "2023-10-02",
      imagem: "/images/upa.jpeg",
    },
    {
      id: 3,
      titulo: "Clínica da Família",
      avaliacaoEstrela: 4.5,
      endereco: "Travessa da Saúde, 789",
      telefone: "(71) 5555-5555",
      status: StatusEnum.MODERADO,
      capacidade: 2.0,
      ultimaAtualizacao: "2023-10-03",
      imagem: "/images/upa.jpeg",
    },
    {
      id: 1,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.CHEIO,
      capacidade: 3.0,
      ultimaAtualizacao: "2023-10-01",
      imagem: "/images/upa.jpeg",
    },
    {
      id: 2,
      titulo: "Hospital Municipal",
      avaliacaoEstrela: 3.5,
      endereco: "Avenida Central, 456",
      telefone: "(71) 9876-5432",
      status: StatusEnum.VAZIO,
      capacidade: 1.0,
      ultimaAtualizacao: "2023-10-02",
      imagem: "/images/upa.jpeg",
    },
    {
      id: 3,
      titulo: "Clínica da Família",
      avaliacaoEstrela: 4.5,
      endereco: "Travessa da Saúde, 789",
      telefone: "(71) 5555-5555",
      status: StatusEnum.MODERADO,
      capacidade: 2.0,
      ultimaAtualizacao: "2023-10-03",
      imagem: "/images/upa.jpeg",
    },
    {
      id: 3,
      titulo: "Clínica da Família",
      avaliacaoEstrela: 4.5,
      endereco: "Travessa da Saúde, 789",
      telefone: "(71) 5555-5555",
      status: StatusEnum.MODERADO,
      capacidade: 2.0,
      ultimaAtualizacao: "2023-10-03",
      imagem: "/images/upa.jpeg",
    },
   
  ]

  const shadowStyle = {
    boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
  };

  const shadowSearch = {
    boxShadow: "4px 8px 15px rgba(0, 0, 0, 0.25)"
  }


  const cardWidth = "w-[1040px]";
  const cardHeight = "h-[300px]"; 

  return (
    <main className="w-full min-h-screen">
      
      {/* Cabeçalho */}
      <Cabecalho navLinks={navLinks} />

      {/* Carrossel de Destaques */}
      <div className="w-full py-20 bg-gradient-to-r from-[#004E4C] to-verdeClaro" style={shadowStyle}>
        <Carousel
          opts={{
            align: "center", 
            loop: true,
          }}
          className="w-full mx-auto" 
        >
          <CarouselContent className={`-ml-20`}>
            <CarouselItem className={`pl-20 basis-auto`} >
              <div className={`p-10 bg-white rounded-2xl shadow-sm ${cardWidth} ${cardHeight} flex flex-col justify-between relative`} style={shadowStyle}>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col w-4/6">
                    <h1 className="text-5xl font-semibold text-gray-800 mb-10">
                      Atualize o status da sua unidade de saúde
                    </h1>
                    <p className="text-3xl text-gray-600 mb-4">
                      Ajude outros usuários informando a situação atual das emergências.
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-[#106A43] hover:bg-[#0c5033] text-white text-lg rounded-lg w-4/12 flex items-center justify-center absolute bottom-10 right-10"
                >
                  REGISTRAR LOTAÇÃO
                </Button>
              </div>
            </CarouselItem>


            <CarouselItem className={`pl-20 basis-auto`}>
              <div className={`p-6 bg-white rounded-2xl shadow-sm ${cardWidth} ${cardHeight} flex flex-col justify-between`} style={shadowStyle}>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-2">Seu impacto conta</h1>
                  <p className="text-base text-gray-600 mb-4">Veja como suas contribuições ajudam a comunidade a se manter informada.</p>
                </div>
                <Button className="bg-[#106A43] hover:bg-[#0c5033] text-white">
                  VER MEUS PONTOS
                </Button>
              </div>
            </CarouselItem>

            <CarouselItem className={` pl-20 basis-auto overflow-visible`}>
              <div
                className={`p-10 bg-[#106A43] rounded-2xl shadow-sm text-white ${cardWidth} ${cardHeight} flex flex-row justify-between items-center overflow-visible`}
                style={shadowStyle}
              >
                <div className="flex flex-col w-1/2 ">
                  <h1 className="text-5xl font-semibold mb-6">Objetivo 3: Saúde e Bem-Estar</h1>
                  <p className="text-2xl mb-4 ">Contribuindo para os Objetivos de Desenvolvimento Sustentável.</p>
                </div>
                <div className="flex justify-end w-1/2">
                  <Image
                    src="/images/ods3.png"
                    alt="ODS 3: Saúde e Bem-Estar"
                    width={450}
                    height={450}
                    
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className={`pl-20 basis-auto`}>
              <div className={`p-6 bg-white rounded-2xl shadow-sm ${cardWidth} ${cardHeight} flex flex-col justify-between`} style={shadowStyle}>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-2">Descubra unidades próximas</h1>
                  <p className="text-base text-gray-600 mb-4">Utilize o mapa para encontrar os hospitais e clínicas mais próximos de você.</p>
                </div>
                <Button className="bg-[#106A43] hover:bg-[#0c5033] text-white">
                  IR PARA O MAPA
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>

      {/* Barra de pesquisa */} 
      <div 
        className="flex w-full items-center h-36 bg-verdeEscuro"
        style={shadowSearch}
      >
          <div className="flex items-center justify-start pl-40 h-full text-white text-4xl font-semibold">
            <h1>EMERGÊNCIAS E UPAS</h1>
          </div>
          <div className="flex items-center w-6/12 justify-end h-full">
            <input
              type="text"
              placeholder="Pesquisar por nome da unidade de saúde..."
              className=" w-3/4 h-15 px-4 bg-white text-lg rounded-l-lg focus:outline-none focus:ring-2 focus:ring-verdeClaro"
            />
            <button className="flex items-center justify-center h-15 w-15 bg-verdeClaro  text-white rounded-r-lg">
              <Search />
            </button>
          </div>
      </div>

      {/* Filtro das unidades de saúde */} 
      <div className="flex items-center ml-20 mt-10 gap-x-2">
          <span className="text-verdeEscuro text-2xl font-bold">Ordenar por</span>
          <select className="ml-2 bg-white text-verdeEscuro border border-verdeClaro rounded-lg p-2">
            <option value="mais-recentes"> Lotação </option>
            <option value="mais-antigos"> Localização </option>
            <option value="mais-votados"> Status</option>
          </select>
      </div>

      {/* Cards de unidades de saúde */}
      <div className="grid grid-cols-3 place-items-center justify-center pl-10 pr-10 mt-8">
        {cards.map((card, id) => (
          <Card
            key={card.id}
            className= "flex bg-verdePastel w-11/12 h-80 m-4 p-4 rounded-lg "
          >
            <CardContent className="flex">
              <div className="flex flex-row items-center w-2/3 justify-center mb-4">
                <Image
                  src={card.imagem}
                  alt={card.titulo}
                  width={300}
                  height={300}
                  />
              </div>
              <div className="flex flex-col w-full justify-center text-justify pl-8">
                <div className="flex items-end justify-between w-full mb-2">
                  <h1>{card.titulo}</h1>
                  <Maximize2/>
                </div>
                <p>Endereço: {card.endereco}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: Math.floor(card.avaliacaoEstrela) }).map((_, i) => (
                    <Star stroke="0.5" fill="black" key={i} className="" />
                  ))}
                </div>
                <p>Telefone: {card.telefone}</p>
                <p className="font-bold">Status: {card.status}</p>
                <div className="flex items-center mb-2">
                  <User className="text-red-600"/><User /><User /><User /><User />
                </div>
                <span className="text-">{card.ultimaAtualizacao}</span>
              </div>
            </CardContent>
            <CardFooter>
            <button className="bg-verdeEscuro w-full text-white py-2 px-4 rounded ">REGISTRAR LOTAÇÃO</button>
            </CardFooter>
          </Card>
        ))}
      </div>

      
      
    </main>
  );
}