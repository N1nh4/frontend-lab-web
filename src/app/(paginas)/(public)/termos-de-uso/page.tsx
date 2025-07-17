'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

export default function TermosDeUso() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-justify">
      <button
        onClick={() => router.back()}
        className="flex items-center text-green-800 mb-6 hover:underline"
      >
        <IoArrowBack className="mr-2" /> Voltar
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">Termos de Uso</h1>

      <p className="mb-4">Última atualização: 11 de julho de 2025</p>

      <p className="mb-4">
        Bem-vindo à plataforma colaborativa de monitoramento de lotação em unidades de saúde, desenvolvida como
        parte do projeto acadêmico do Laboratório Web, com foco no ODS 3 – Saúde e Bem-Estar.
      </p>

      <p className="mb-4">
        Ao criar uma conta ou utilizar esta plataforma, você concorda com estes Termos de Uso e com a {" "}
        <a href="/politica-de-privacidade" className="text-emerald-600 hover:underline">Política de privacidade</a>
        , declarando estar ciente e de acordo com suas disposições.
      </p>

      <p className="mb-4 font-semibold">1. Objetivo da Plataforma</p>
      <p className="mb-4">
        Este sistema tem por finalidade permitir que usuários contribuam colaborativamente com informações sobre o
        estado de lotação de emergências e UPAs. A plataforma não substitui informações oficiais fornecidas por
        órgãos de saúde.
      </p>

      <p className="mb-4 font-semibold">2. Cadastro de Usuário</p>
      <p className="mb-4">
        O uso da plataforma pode ser feito de forma anônima para consulta. No entanto, para contribuir com
        atualizações, o usuário deve realizar um cadastro que poderá incluir: nome, CPF, email, telefone e
        localização. O usuário compromete-se a fornecer dados verídicos e atualizados.
      </p>

      <p className="mb-4 font-semibold">3. Responsabilidades do Usuário</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Contribuir com informações verdadeiras e recentes.</li>
        <li>Não utilizar a plataforma para disseminação de informações falsas, ofensivas ou ilegais.</li>
        <li>Respeitar o intervalo mínimo de 30 minutos entre atualizações da mesma unidade.</li>
        <li>Não tentar comprometer a segurança ou funcionamento do sistema.</li>
      </ul>

      <p className="mb-4 font-semibold">4. Limitações da Plataforma</p>
      <p className="mb-4">
        As informações disponibilizadas são baseadas em colaboração dos usuários e não possuem vínculo oficial com
        entidades governamentais. A plataforma não realiza agendamento de consultas nem oferece canal de contato com
        profissionais de saúde. O sistema exige conexão com a internet para funcionar.
      </p>

      <p className="mb-4 font-semibold">5. Direitos Autorais</p>
      <p className="mb-4">
        O conteúdo da plataforma, incluindo textos, gráficos, códigos e interface, pertence ao time de desenvolvimento
        acadêmico, sendo vedada a reprodução sem autorização.
      </p>

      <p className="mb-4 font-semibold">6. Suspensão ou Cancelamento</p>
      <p className="mb-4">
        A plataforma se reserva o direito de suspender ou excluir contas que violem estes termos, especialmente em
        casos de uso indevido ou fraude.
      </p>

      <p className="mb-4 font-semibold">7. Alterações</p>
      <p className="mb-4">
        Estes Termos de Uso podem ser atualizados periodicamente. É responsabilidade do usuário verificar
        atualizações.
      </p>

      <p className="mb-4 font-semibold">8. Contato</p>
      <p className="mb-4">
        Para dúvidas ou sugestões, entre em contato pelo email: [email@instituicao.br]
      </p>
    </div>
  );
}