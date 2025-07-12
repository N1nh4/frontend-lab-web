import Cabecalho from "@/components/cabecalho";


export default function SobreNos() {
  const navLinks = [
    { id: 1, label: 'Registrar lotação', href: '/' },
    { id: 2, label: 'Ir para o mapa', href: '/mapa' },
    { id: 3, label: 'Ranking', href: '/ranking' },
    { id: 4, label: 'Entrar', href: '/entrar' },
    { id: 5, label: 'Criar conta', href: '/criar-conta' },
    { id: 6, label: 'Sobre nos', href: '/sobre-nos' },
    { id: 7, label: 'Configurações', href: '/perfil' },
  ];


  return (
    <div>
      <Cabecalho navLinks={navLinks} />
      <main className="p-6">
        <h1 className="">Olá, bem-vindo ao UpaAgora!</h1>
      </main>
    </div>
  );
}
