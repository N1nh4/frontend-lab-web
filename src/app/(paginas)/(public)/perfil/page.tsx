import Cabecalho from "@/components/cabecalho";
import {UserRound} from 'lucide-react';
import {Camera} from 'lucide-react';
export default function Perfil() {
    const navLinks = [
    { id: 1, label: 'Registrar lotação', href: '/' },
    { id: 2, label: 'Ir para o mapa', href: '/mapa' },
    { id: 3, label: 'Ranking', href: '/ranking' },
    { id: 4, label: 'Entrar', href: '/entrar' },
    { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
    { id: 6, label: 'Criar conta', href: '/criar-conta' },
    { id: 7, label: 'Configurações', href: '/perfil' },
   
  ];
  return (
    <div className="relative overflow-x-hidden">
      
      {/* Fundo com divisão diagonal (feito inline) */}
      <div
      className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-r from-verdeClaro to-verdeClaro -z-10"
      style={{ clipPath:"polygon(0 0, 100% 0, 100% 30%, 0 80%)"}}>
      </div>
     
      <Cabecalho navLinks={navLinks} />
      <div className ="w-full flex">
       
          <div className="flex flex-col items-start justify-center w-1/3 h-full z-20 pl-30 mt-25">
            <div className="mt-15 fixed z-9  text-white">
              <h1 className = "font-bold text-[200%]">GERENCIAMENTO</h1>
              <h1 className = "font-bold text-[200%] mt-[-12px]">DE CONTA</h1>
            </div>

            <div className="fixed flex z-9 text-black mt-55 w-80">
              <p className="text-xl leading-none">Preencha ou edite os campos abaixo e salve as alterações para manter seu perfil atualizado.</p>
            </div>

            
            <div className="fixed flex flex-col items-start justify-center z-20 ml-18 mt-110">
              <UserRound className="relative rounded-full bg-blue-100 cursor-pointer"size={110} strokeWidth={1}/>
              <div className="relative ml-[62%] mt-[-25%] w-10 h-10 bg-amber-50 z-20 rounded-full flex items-center justify-center cursor-pointer">
                <Camera className="text-emerald-800 z-30"size={30} strokeWidth={3.5} />    
              </div> 
            </div>
                
            
          </div>

          <div className ="flex flex-col items-start justify-center">
            <div className="w-220 h-59  mt-15 rounded-xl overflow-hidden flex shadow-[5px_5px_4px_rgba(0,0,0,0.25)]"> 
              <div className="w-3/8 bg-gray-200 ">
                <div className=" z-9  text-emerald-800 ml-5 mt-10 w-46">
                  <h1 className = "font-bold text-[200%] leading-none">Informações Pessoais</h1>
                  
                </div>
                <div className="flex z-9 text-black ml-5 mt-5 w-86">
                  <p className="leading-none">Essa informação é particular e não será compartilhada com outras pessoas.</p>
                </div>
              </div>

              <div className="w-5/8 bg-gray-50 shadow-[5px_5px_4px_rgba(0,0,0,0.25)]">{/* ESSA PORRA AQUI ENGLOBA TUDO */}
                <div className ="flex flex-col items-start justify-center ">
                  <div className="w-55 h-12 ml-15 mt-[7%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                         
                         
                           <input
                              type="text"
                              value={"Nome:"}
                           
                              
                                                   />
                      
                        <h1 className = "font-bold text-[70%] leading-none"></h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-39.5 h-12 ml-15 mt-[5.5%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46">
                        <h1 className = "font-bold text-[70%] leading-none">DATA DE NASCIMENTO:</h1>
                        
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>{/*FINAL DESSA PORRA AQUI ENGLOBA TUDO */}
              <div className="w-5/8 bg-gray-50 ">{/* ESSA PORRA AQUI ENGLOBA TUDO */}
                <div className ="flex flex-col items-start justify-center">
                  <div className="w-55 h-12 ml-[5%] mt-[6.55%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">CIDADE/ESTADO:</h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-70 h-12 ml-[-17%] mt-[6%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">ENDEREO DE EMAIL:</h1>
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
            

            
            <div className="w-220 h-59 mt-15 mb-10 rounded-xl overflow-hidden flex shadow-[5px_5px_4px_rgba(0,0,0,0.25)]">
              <div className="w-220 h-59 rounded-lg overflow-hidden flex">
              <div className="w-3/8 bg-gray-200">
                <div className=" z-9  text-emerald-800 ml-5 mt-10 w-46">
                  <h1 className = "font-bold text-[200%] leading-none">Informações Complementares</h1>
                  
                </div>
                <div className="flex z-9 text-black ml-5 mt-5 w-86">
                  <p className="leading-none">Essa informação é particular e não será compartilhada com outras pessoas.</p>
                </div>
              </div>

              <div className="w-5/8 bg-gray-50">
                <div className ="flex flex-col items-start justify-center">
                  <div className="w-55 h-12 ml-15 mt-[7%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">TELEFONE:</h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-30 h-12 ml-15 mt-[5.5%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46">
                        <h1 className = "font-bold text-[70%] leading-none">N°:</h1>
                        
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
              <div className="w-5/8 bg-gray-50">
                <div className ="flex flex-col items-start justify-center">
                  <div className="w-55 h-12 ml-[5%] mt-[6%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">RUA:</h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-80 h-12 ml-[-26.2%] mt-[5%] rounded-lg overflow-hidden flex">
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
              
              
          </div>
          <div className="w-220 h-59 mb-10 rounded-xl overflow-hidden flex shadow-[5px_5px_4px_rgba(0,0,0,0.25)]"> {/* aq fica o começo do quadro */}
              <div className="w-3/8 bg-gray-200">
                <div className=" z-9  text-emerald-800 ml-5 mt-10 w-46">
                  <h1 className = "font-bold text-[200%] leading-none">Segurança e privacidade</h1>
                  
                </div>
                <div className="flex z-9 text-black ml-5 mt-5 w-86">
                  <p className="leading-none">Essa informação é particular e não será compartilhada com outras pessoas.</p>
                </div>
              </div>

              <div className="w-4/8 bg-gray-50">{/* ESSA PORRA AQUI ENGLOBA TUDO */}
                <div className ="flex flex-col items-start justify-center">
                  <div className="w-55 h-12 ml-15 mt-[7%] rounded-lg overflow-hidden flex">
                    <div className="w-1/1 bg-gray-200">
                      <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                        <h1 className = "font-bold text-[70%] leading-none">ID:</h1>
                      </div>
                    </div>
                  </div>
                <div className="w-55 h-12 ml-15 mt-[7%] rounded-lg overflow-hidden flex">
                  <div className="w-1/1 bg-gray-200">
                    <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                      <h1 className = "font-bold text-[70%] leading-none">NOVA SENHA:</h1>
                    </div>
                  </div>
                </div>

                  
                </div>
              </div>{/*FINAL DESSA PORRA AQUI ENGLOBA TUDO */}
              <div className="w-5/8 bg-gray-50">{/* ESSA PORRA AQUI ENGLOBA TUDO */}
                <div className ="flex flex-col items-start justify-center">
                <div className="w-55 h-12 ml-4.5 mt-[7.2%]  rounded-lg overflow-hidden flex">
                  <div className="w-1/1 bg-gray-200">
                    <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                      <h1 className = "font-bold text-[70%] leading-none">SENHA ATUAL:</h1>
                    </div>
                  </div>
                </div>

                <div className="w-55 h-12 ml-4.5 mt-[7.2%]  rounded-lg overflow-hidden flex">
                  <div className="w-1/1 bg-gray-200">
                    <div className=" z-9  text-gray-400 ml-2 mt-1 w-46 ">
                      <h1 className = "font-bold text-[70%] leading-none">CONFIRMAR SENHA:</h1>
                    </div>
                  </div>
                </div>
                  <div className="w-40 h-8 ml-[29%] mt-[16%] rounded-xl overflow-hidden flex">
                    <div className="w-1/1 bg-emerald-700 cursor-pointer">
                      <div className=" z-9  text-white ml-[14.5%] mt-[6%]">
                        <h1 className = "font-bold text-[70%] leading-none">SALVAR ALTERAÇÕES</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
          

          
            
      </div>
      

      
      

    </div>
  );
}