'use client';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

export default function PoliticaDePrivacidade() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-justify">
      <button
        onClick={() => router.back()}
        className="flex items-center text-green-800 mb-6 hover:underline"
      >
        <IoArrowBack className="mr-2" /> Voltar
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">Política de Privacidade</h1>

      <p className="mb-4">Última atualização: 17 de julho de 2025</p>

      <p className="mb-4">
        Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos os dados dos usuários
        que interagem com a plataforma de monitoramento colaborativo de unidades de saúde.
      </p>

      <p className="mb-4 font-semibold">1. Dados Coletados</p>
      <p className="mb-4">
        Nome completo, CPF, email, telefone, localização geográfica (caso autorizada), data e hora das contribuições,
        e histórico de avaliações (visível apenas para administradores).
      </p>

      <p className="mb-4 font-semibold">2. Finalidade do Tratamento</p>
      <p className="mb-4">
        Os dados são utilizados para: identificar usuários confiáveis, validar contribuições, exibir informações no
        mapa interativo, e garantir segurança e personalização da experiência do usuário.
      </p>

      <p className="mb-4 font-semibold">3. Base Legal (LGPD)</p>
      <p className="mb-4">
        Consentimento do usuário (art. 7º, I), legítimo interesse do controlador (art. 7º, IX), e proteção da saúde
        (art. 11, II, c).
      </p>

      <p className="mb-4 font-semibold">4. Armazenamento e Proteção</p>
      <p className="mb-4">
        Dados sensíveis são armazenados com criptografia. Utilizamos medidas técnicas e administrativas de segurança
        da informação para proteção contra acessos não autorizados.
      </p>

      <p className="mb-4 font-semibold">5. Compartilhamento</p>
      <p className="mb-4">
        Os dados não são compartilhados com terceiros, salvo obrigação legal ou ordem judicial.
      </p>

      <p className="mb-4 font-semibold">6. Direitos do Titular</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Confirmar existência de tratamento</li>
        <li>Acessar, corrigir ou excluir seus dados</li>
        <li>Revogar consentimento a qualquer momento</li>
      </ul>

      <p className="mb-4 font-semibold">7. Retenção</p>
      <p className="mb-4">
        Os dados serão mantidos enquanto a conta estiver ativa ou conforme obrigação legal ou interesse acadêmico.
      </p>

      <p className="mb-4 font-semibold">8. Cookies</p>
      <p className="mb-4">
        Poderemos utilizar cookies para melhorar a navegação e funcionalidades da plataforma.
      </p>

      <p className="mb-4 font-semibold">9. Atualizações</p>
      <p className="mb-4">
        Esta Política poderá ser atualizada e alterações relevantes serão comunicadas pelo sistema.
      </p>

      <p className="mb-4 font-semibold">10. Encarregado</p>
      <p className="mb-4">
        Em caso de dúvidas, entre em contato com o responsável pelo projeto: [PRECISAMOS ADC O EMAIL]
      </p>
    </div>
  );
}
