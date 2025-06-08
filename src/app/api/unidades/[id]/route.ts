// app/api/unidades/[id]/route.ts
import { NextResponse } from 'next/server';
import { allUnidadesData } from '@/data/unidades'; // Importa seus dados mockados

// Define a interface para os parâmetros da rota dinâmica
interface UnidadeParams {
  params: {
    id: string; // O ID virá como string da URL
  };
}

export async function GET(request: Request, { params }: UnidadeParams) {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simula atraso

  const id = parseInt(params.id); // Converte o ID da URL para número

  const unidade = allUnidadesData.find(u => u.id === id);

  if (unidade) {
    return NextResponse.json(unidade);
  } else {
    // Retorna um erro 404 se a unidade não for encontrada
    return new NextResponse('Unidade não encontrada', { status: 404 });
  }
}