import UnidadeSaudeDTO from "@/data/unidadesdto";
import UnidadePaginaDTO from "@/data/unidadePaginaDTO";

async function getUnidade(id: number): Promise<UnidadePaginaDTO> {
    try {
        const response = await fetch(`http://localhost:8080/unidade/${id}`)

        if (!response) throw new Error("Não foi possível buscar a unidade.")

        const dado = await response.json()

        return dado
    } catch(erro) {
        throw new Error("Erro ao buscar unidade.")
    }
}

async function getUnidades(): Promise<UnidadeSaudeDTO[]> { 
    try {
        const response = await fetch('http://localhost:8080/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Apenas se for necessário enviar cookies
        });


        if (!response.ok) {
            throw new Error(`Erro ao buscar unidade: ${response.statusText}`);
        }

        const dados = await response.json();

        return dados;
    } catch (error) {
        console.error('Erro ao buscar unidade:', error);
        throw error;
    }
}

async function buscarInformacoesDaUnidade(dados: any) {
    try {
        const resposta = await fetch(`http://localhost:8080/unidade/2/registrar-lotacao`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao enviar atualização da unidade.');
        }

        return resposta.json();
    } catch (error) {
        console.error('Erro ao enviar atualização da unidade:', error);
    }  
}

async function registrarAtualizacaoCompleta(
  status: string,
  usuarioId: number,
  unidadeId: number
): Promise<any> {
  const dados = {
    status,
    usuarioId,
    unidadeId,
  };
  console.log('dados:', dados);

  const resposta = await fetch('http://localhost:8080/atualizacoes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!resposta.ok) {
    throw new Error('Erro ao enviar atualização');
  }

  return resposta.json();
}

async function notificarUnidade(email: string, id: number): Promise<any> {
    
  const resposta = await fetch('http://localhost:8080/salvar-email-notificacao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  if (!resposta.ok) {
    throw new Error('Erro ao enviar notificacao');
  }

  return resposta.json();
}


export {
    getUnidades,
    getUnidade,
    buscarInformacoesDaUnidade,
    registrarAtualizacaoCompleta,
    notificarUnidade
}
