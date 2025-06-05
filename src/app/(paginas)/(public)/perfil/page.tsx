import Cabecalho from "@/components/cabecalho";

export default function Perfil() {
    const navLinks = [
    { id: 1, label: 'Registrar lotação', href: '/registrar-lotacao' },
    { id: 2, label: 'Ir para o mapa', href: '/mapa' },
    { id: 3, label: 'Ranking', href: '/ranking' },
    { id: 4, label: 'Entrar', href: '/entrar' },
    { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
    { id: 6, label: 'Criar conta', href: '/criar-conta' },
  ];
  return (
    <div className="relative  overflow-x-hidden">
      
      {/* Fundo com divisão diagonal (feito inline) */}
      <div
      className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-r from-green-800 to-emerald-300 -z-10"
      style={{ clipPath:"polygon(0 0, 100% 0, 100% 30%, 0 80%)"}}>
      </div>
     
      <Cabecalho navLinks={navLinks} />
      <div className="flex flex-col items-center justify-center h-full z-20">
      <div className=" z-9  text-white">
        <h1 className = "font-bold text-[252%]">GERENCIAMENTO</h1>
        <h1 className = "font-bold text-[252%]">DE CONTA</h1>
      </div>
      <div className="z-9 text-black">
        <h1 className = "text-[24px]">Preencha ou edite os campos</h1>
        <h1 className = "text-[24px]">abaixo e salve as alterações para</h1>
        <h1 className = "text-[24px]">manter seu perfil atualizado. </h1>
      </div>
      <div className=" z-9  text-white">
        <h1 className = "font-bold text-[252%]">GERENCIAMENTO</h1>
        <h1 className = "font-bold text-[252%]">DE CONTA</h1>
      </div>
      <div className="z-9 text-black">
        <h1 className = "text-[24px]">Preencha ou edite os campos</h1>
        <h1 className = "text-[24px]">abaixo e salve as alterações para</h1>
        <h1 className = "text-[24px]">manter seu perfil atualizado. </h1>
      </div>

      </div>
      

    </div>
  );
}