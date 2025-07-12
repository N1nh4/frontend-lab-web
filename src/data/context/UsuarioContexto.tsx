"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Interface base do usuário
export interface Usuario {
  idUsuario: number;
  nome: string;
  email: string;
}

// Tipo do contexto
interface ContextoUsuarioType {
  usuarios: Usuario[];
  usuarioAtual: Usuario;
  trocarUsuario: (id: number) => void;
}

// Criando o contexto
const ContextoUsuario = createContext<ContextoUsuarioType | undefined>(undefined);

// Provider
export const ContextoUsuarioProvider = ({ children }: { children: ReactNode }) => {
  const usuariosMock: Usuario[] = [
    {
      idUsuario: 1,
      nome: "Alana",
      email: "alana@example.com",
    },
    {
      idUsuario: 2,
      nome: "Rafael",
      email: "rafael@example.com",
    },
  ];

  const [usuarioAtual, setUsuarioAtual] = useState<Usuario>(usuariosMock[1]);

  const trocarUsuario = (id: number) => {
    const novoUsuario = usuariosMock.find((u) => u.idUsuario === id);
    if (novoUsuario) setUsuarioAtual(novoUsuario);
  };

  return (
    <ContextoUsuario.Provider value={{ usuarios: usuariosMock, usuarioAtual, trocarUsuario }}>
      {children}
    </ContextoUsuario.Provider>
  );
};

// Hook para usar o contexto
export const useUsuario = () => {
  const context = useContext(ContextoUsuario);
  if (!context) {
    throw new Error("useUsuario deve ser usado dentro do ContextoUsuarioProvider");
  }
  return context;
};
