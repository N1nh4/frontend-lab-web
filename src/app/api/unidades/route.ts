// app/api/unidades/route.ts
import { NextResponse } from 'next/server';
import { allUnidadesData } from '@/data/unidades'; // Importa seus dados mockados

export async function GET(request: Request) {
  // Simula um pequeno atraso de rede (opcional)
  await new Promise(resolve => setTimeout(resolve, 500)); 
  
  return NextResponse.json(allUnidadesData);
}

// Você pode adicionar outros métodos HTTP aqui, como POST, PUT, DELETE, etc.
// export async function POST(request: Request) { ... }