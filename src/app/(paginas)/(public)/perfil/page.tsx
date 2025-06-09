import Cabecalho from "@/components/cabecalho";
import {UserRound} from 'lucide-react';
import {Camera} from 'lucide-react';
export default function Perfil() {
    const navLinks = [
    { id: 1, label: 'Registrar lotação', href: '/registrar-lotacao' },
    { id: 2, label: 'Ir para o mapa', href: '/mapa' },
    { id: 3, label: 'Ranking', href: '/ranking' },
    { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
   
  ];
  return (
    <div className="relative overflow-x-hidden">
      
      {/* Fundo com divisão diagonal (feito inline) */}
      <div
      className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-r from-green-800 to-emerald-300 -z-10"
      style={{ clipPath:"polygon(0 0, 100% 0, 100% 30%, 0 80%)"}}>
      </div>
     
      <Cabecalho navLinks={navLinks} />
      <div className ="w-full flex">
       
          <div className="flex flex-col items-start justify-center w-1/3 h-full z-20 pl-30 mt-30">
            <div className=" z-9  text-white">
              <h1 className = "font-bold text-[200%]">GERENCIAMENTO</h1>
              <h1 className = "font-bold text-[200%] mt-[-12px]">DE CONTA</h1>
            </div>

            <div className="flex z-9 text-black mt-2 w-80">
              <p className="text-xl leading-none">Preencha ou edite os campos abaixo e salve as alterações para manter seu perfil atualizado.</p>
            </div>

            
            <div className="flex flex-col items-start justify-center z-20 ml-18 mt-5">
              <UserRound className="relative rounded-full bg-blue-100 cursor-pointer"size={110} strokeWidth={1}/>
            </div>
                
            <div className="relative ml-[42%] mt-[-11%] w-10 h-10 bg-amber-50 z-20 rounded-full flex items-center justify-center cursor-pointer">
              <Camera className="text-emerald-800 z-30"size={30} strokeWidth={3.5} />    
            </div> 
          </div>

          <div className ="flex flex-col items-start justify-center">
            <div className="w-220 h-59  mt-15 rounded-xl overflow-hidden flex">
              <div className="w-3/8 bg-gray-200">
                <div className=" z-9  text-emerald-800 ml-5 mt-10 w-46">
                  <h1 className = "font-bold text-[200%] leading-none">Informações Complementares</h1>
                  
                </div>
                <div className="flex z-9 text-black ml-5 mt-5 w-86">
                  <p className="leading-none">Essa informação é particular e não será compartilhada com outras pessoas.</p>
                </div>
              </div>

              <div className="w-5/8 bg-gray-50">{/* ESSA PORRA AQUI ENGLOBA TUDO */}
                <div className ="flex flex-col items-start justify-center">
                  <div className="w-55 h-12 ml-15 mt-[7%] rounded-xl overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">TELEFONE:</h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-30 h-12 ml-15 mt-[5.5%] rounded-xl overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46">
                        <h1 className = "font-bold text-[70%] leading-none">N°:</h1>
                        
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>{/*FINAL DESSA PORRA AQUI ENGLOBA TUDO */}
              <div className="w-5/8 bg-gray-50">{/* ESSA PORRA AQUI ENGLOBA TUDO */}
                <div className ="flex flex-col items-start justify-center">
                  <div className="w-55 h-12 ml-[5%] mt-[6%] rounded-xl overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">RUA:</h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-80 h-12 ml-[-26.2%] mt-[5%] rounded-xl overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">COMPLEMENTO:</h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-40 h-8 ml-[24%] mt-[15%] rounded-xl overflow-hidden flex">
                    <div className="w-1/1 bg-emerald-700 cursor-pointer">
                      <div className=" z-9  text-white ml-[14.5%] mt-[6%]">
                        <h1 className = "font-bold text-[70%] leading-none">SALVAR ALTERAÇÕES</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="w-220 h-59  mt-15 rounded-xl overflow-hidden flex">
              <div className="w-3/8 bg-gray-200">
                <div className=" z-9  text-emerald-800 ml-5 mt-10 w-46">
                  <h1 className = "font-bold text-[200%] leading-none">Segurança e privadicade</h1>
                  
                </div>
                <div className="flex z-9 text-black ml-5 mt-5 w-86">
                  <p className="leading-none">Essa informação é particular e não será compartilhada com outras pessoas.</p>
                </div>
              </div>
              <div className="w-5/8 bg-gray-50">{/* ESSA PORRA AQUI ENGLOBA TUDO */}</div>
              
            </div>
            <div className="w-220 h-59  mt-15 rounded-xl overflow-hidden flex">
              <div className="w-3/8 bg-gray-200">
                <div className=" z-9  text-emerald-800 ml-5 mt-10 w-46">
                  <h1 className = "font-bold text-[200%] leading-none">Segurança e privadicade</h1>
                  
                </div>
                <div className="flex z-9 text-black ml-5 mt-5 w-86">
                  <p className="leading-none">Essa informação é particular e não será compartilhada com outras pessoas.</p>
                </div>
              </div>
              <div className="w-5/8 bg-gray-50">{/* ESSA PORRA AQUI ENGLOBA TUDO */}</div>
              
            </div>

          </div>
          

          
            
      </div>
      

      
      

    </div>
  );
}