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
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

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
      capacidade: 2.0,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 2,
      titulo: "Unidade de Pronto Atendimento (UPA)",
      avaliacaoEstrela: 3.5,
      endereco: "Avenida Central, 456",
      telefone: "(71) 9876-5432",
      status: StatusEnum.MUITO_CHEIO,
      capacidade: 5.0,
      ultimaAtualizacao: "2023-10-02",
      imagem: "/images/upa.png",
    },
    {
      id: 3,
      titulo: "Clínica da Família",
      avaliacaoEstrela: 4.5,
      endereco: "Travessa da Saúde, 789",
      telefone: "(71) 5555-5555",
      status: StatusEnum.MODERADO,
      capacidade: 3.0,
      ultimaAtualizacao: "2023-10-03",
      imagem: "/images/upa.png",
    },
    {
      id: 1,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.CHEIO,
      capacidade: 4.0,
      ultimaAtualizacao: "2023-10-01",
      imagem: "/images/upa.png",
    },
    {
      id: 2,
      titulo: "Hospital Municipal",
      avaliacaoEstrela: 3.5,
      endereco: "Avenida Central, 456",
      telefone: "(71) 9876-5432",
      status: StatusEnum.POUCO_VAZIO,
      capacidade: 1.0,
      ultimaAtualizacao: "2023-10-02",
      imagem: "/images/upa.png",
    },
    {
      id: 3,
      titulo: "Clínica da Família",
      avaliacaoEstrela: 4.5,
      endereco: "Travessa da Saúde, 789",
      telefone: "(71) 5555-5555",
      status: StatusEnum.POUCO_VAZIO,
      capacidade: 1.0,
      ultimaAtualizacao: "2023-10-03",
      imagem: "/images/upa.png",
    },
    {
      id: 3,
      titulo: "Clínica da Família",
      avaliacaoEstrela: 4.5,
      endereco: "Travessa da Saúde, 789",
      telefone: "(71) 5555-5555",
      status: StatusEnum.MODERADO,
      capacidade: 3.0,
      ultimaAtualizacao: "2023-10-03",
      imagem: "/images/upa.png",
    },
   
  ]

  const shadowStyle = {
    boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)",
  };

  const shadowSearch = {
    boxShadow: "4px 8px 15px rgba(0, 0, 0, 0.25)"
  }

  const cardWidth = "w-[700px]";
  const cardHeight = "h-[200px]"; 

// Função para renderizar estrelas com base na avaliação

  const renderStars = (avaliacao: number) => {
  const totalStars = 5;
  const stars = [];

  const filledStars = Math.floor(avaliacao); // Estrelas cheias (ex: 4 para 4.0, 3 para 3.5)
  const hasHalfStar = (avaliacao % 1) >= 0.5; // Verifica se a parte decimal é 0.5 ou mais

  // Renderiza estrelas cheias
  for (let i = 0; i < filledStars; i++) {
    stars.push(<TbStarFilled key={`filled-${i}`} size={18} color="black" />);
  }

  // Renderiza meia estrela, se aplicável
  if (hasHalfStar) {
    stars.push(<TbStarHalfFilled key={`half-star`} size={18} color="black" />);
  }

  // Renderiza estrelas vazias
  const emptyStarsCount = totalStars - stars.length; // Quantas estrelas ainda faltam para completar 5
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<TbStar key={`empty-${i}`} size={18} color="black" />);
  }

  return stars;
};

// Mapeia o status para quantidade de ícones de usuário e suas cores
const getStatusColorLotacao = (status: string) => {
  switch (status) {
    case StatusEnum.VAZIO:
      return "text-emerald-500";
    case StatusEnum.POUCO_VAZIO:
      return "text-emerald-500";
    case StatusEnum.MODERADO:
      return "text-amber-500";
    case StatusEnum.CHEIO:
      return "text-red-500";
    case StatusEnum.MUITO_CHEIO:
      return "text-red-500";
    default:
      return "text-zinc-500";
  }
};

const getCapacityFromStatus = (status: string) => {
  switch (status) {
    case StatusEnum.VAZIO:
      return 1;
    case StatusEnum.POUCO_VAZIO:
      return 2;
    case StatusEnum.MODERADO:
      return 3;
    case StatusEnum.CHEIO:
      return 4;
    case StatusEnum.MUITO_CHEIO:
      return 5;
    default:
      return 0;
  }
};

const renderUserIcons = (status: string) => {
  const totalIcons = 5;
  const userIcons = [];

  const filledColorClass = getStatusColorLotacao(status);
  const emptyColor = "gray"; // Cor para os ícones vazios

  const capacidade = getCapacityFromStatus(status);

  for (let i = 0; i < capacidade; i++) {
    userIcons.push(
      <User key={`user-filled-${i}`} size={18} className={filledColorClass} fill="currentColor" />
    );
  }

  const emptyIconsCount = totalIcons - userIcons.length; // Quantas ícones ainda faltam para completar 5
  for (let i = 0; i < emptyIconsCount; i++) {
    userIcons.push(
      <User key={`user-empty-${i}`} size={18} fill="none" stroke={emptyColor} strokeWidth={1.5} />
    );
  }
  return userIcons;
};
    
 

  return (
    <main className="w-full min-h-screen">
      
      {/* Cabeçalho */}
      <Cabecalho navLinks={navLinks} />

      {/* Carrossel de Destaques */}
      <div className="w-full py-14 bg-gradient-to-r from-[#004E4C] to-verdeClaro" style={shadowStyle}>
        <Carousel
          opts={{
            align: "center", 
            loop: true,
          }}
          className="w-full mx-auto" 
        >
          <CarouselContent className={`-ml-20`}>
            <CarouselItem className={`pl-20 basis-auto`} >
              <div className={`p-6 bg-white rounded-2xl shadow-sm ${cardWidth} ${cardHeight} flex flex-col justify-between relative`} style={shadowStyle}>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-col w-3/5">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-2">
                      Atualize o status da sua unidade de saúde
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">
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
                <div className="flex flex-col w-3/5 ">
                  <h1 className="text-3xl font-semibold mb-2">Objetivo 3: Saúde e Bem-Estar</h1>
                  <p className="text-xl mb-4 ">Contribuindo para os Objetivos de Desenvolvimento Sustentável.</p>
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
        className="flex w-full items-center h-24 bg-verdeEscuro"
        style={shadowSearch}
      >
          <div className="flex items-center justify-start pl-32 h-full text-white text-2xl font-semibold">
            <h1>EMERGÊNCIAS E UPAS</h1>
          </div>
          <div className="flex items-center w-6/12 justify-end h-full">
            <input
              type="text"
              placeholder="Pesquisar por nome da unidade de saúde..."
              className=" w-3/4 h-12 px-4 bg-white text-xs rounded-l-lg focus:outline-none focus:ring-2 focus:ring-verdeClaro"
            />
            <button className="flex items-center justify-center h-12 w-15 bg-verdeClaro  text-white rounded-r-lg">
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
      <div className="grid grid-cols-3 pl-10 pr-10 place-items-center justify-center mt-8">
        {cards.map((card, id) => (
          <Card
            key={card.id}
            className= "flex flex-col relative bg-verdePastel w-11/12  mx-4 rounded-lg mb-6 shadow-[5px_5px_4px_rgba(0,0,0,0.25)] "
          >
            <Maximize2 
              className="absolute top-2 right-2 cursor-pointer" 
              size={18} />
            <CardContent className="flex flex-row flex-grow">
              <div className="flex flex-row items-center w-full justify-center ">
                <Image
                  src={card.imagem}
                  alt={card.titulo}
                  width={300}
                  height={300}
                  
                  />
              </div>
              <div className="flex flex-col text-verdeEscuro w-11/12 justify-center text-justify pl-4 gap-y-1">
                <div className="flex items-end justify-between w-full">
                  <h1 className="text-base text-left font-bold gap-y-0 leading-none">{card.titulo}</h1>
                  
                </div>
                <div className="flex items-center ">
                  {renderStars(card.avaliacaoEstrela)}
                </div>
                <p className="text-xs "><span className="font-bold">Endereço:</span> {card.endereco}</p>
                <p className="text-xs  "><span className="font-bold">Telefone:</span> {card.telefone}</p>
                <p className="font-bold text-sm ">Status: {card.status}</p>
                <div className="flex items-center " >
                  {renderUserIcons(card.status)}
                </div>
                <span className="text-xs italic">{card.ultimaAtualizacao}</span>
              </div>
            </CardContent>
            <CardFooter className="flex p-0">
            <button className="bg-verdeEscuro w-full text-white py-2 px-4 rounded-b-lg ">REGISTRAR LOTAÇÃO</button>
            </CardFooter>
          </Card>
        ))}
      </div>

      
      
    </main>
  );
}