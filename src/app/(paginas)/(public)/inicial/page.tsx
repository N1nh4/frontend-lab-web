import Cabecalho from "@/components/cabecalho";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Inicial() {
  const navLinks = [
    { id: 1, label: 'Registrar lotação', href: '/registrar-lotacao' },
    { id: 2, label: 'Ir para o mapa', href: '/mapa' },
    { id: 3, label: 'Ranking', href: '/ranking' },
    { id: 4, label: 'Entrar', href: '/entrar' },
    { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
    { id: 6, label: 'Criar conta', href: '/criar-conta' },
  ];

  const itemHorizontalSpacing = "20"; 

  const cardWidth = "w-[1040px]";
  const cardHeight = "h-[300px]"; 

  return (
    <div className="w-full min-h-screen">
      <Cabecalho navLinks={navLinks} />
      <main className="w-full py-20 bg-gradient-to-r from-[#004E4C] to-verdeClaro">
        <Carousel
          opts={{
            align: "center", 
            loop: true,
          }}
          className="w-full mx-auto" 
        >
          <CarouselContent className={`-ml-${itemHorizontalSpacing}`}>
            <CarouselItem className={`pl-${itemHorizontalSpacing} basis-auto`}>
              <div className={`p-10 bg-white rounded-2xl shadow-sm ${cardWidth} ${cardHeight} flex flex-col justify-between relative`}>
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


            <CarouselItem className={`pl-${itemHorizontalSpacing} basis-auto`}>
              <div className={`p-6 bg-white rounded-2xl shadow-sm ${cardWidth} ${cardHeight} flex flex-col justify-between`}>
                <div>
                  <h1 className="text-2xl font-semibold text-gray-800 mb-2">Seu impacto conta</h1>
                  <p className="text-base text-gray-600 mb-4">Veja como suas contribuições ajudam a comunidade a se manter informada.</p>
                </div>
                <Button className="bg-[#106A43] hover:bg-[#0c5033] text-white">
                  VER MEUS PONTOS
                </Button>
              </div>
            </CarouselItem>

            <CarouselItem className={`pl-${itemHorizontalSpacing} basis-auto`}>
              <div
                className={`p-10 bg-[#106A43] rounded-2xl shadow-sm text-white ${cardWidth} ${cardHeight} flex flex-row justify-between items-center`}
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


            <CarouselItem className={`pl-${itemHorizontalSpacing} basis-auto`}>
              <div className={`p-6 bg-white rounded-2xl shadow-sm ${cardWidth} ${cardHeight} flex flex-col justify-between`}>
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
      </main>
    </div>
  );
}