"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Interface base do usuário
export interface Usuario {
  usuarioId: number;
  nome: string;
  email: string;
}

// Tipo do contexto
import { Dispatch, SetStateAction } from "react";

interface ContextoUsuarioType {
  usuarioAtual: Usuario;
  setUsuarioAtual: Dispatch<SetStateAction<Usuario>>;
}

// Criando o contexto
export const ContextoUsuario = createContext<ContextoUsuarioType | undefined>(undefined);

// Provider
export const ContextoUsuarioProvider = ({ children }: { children: ReactNode }) => {

  const [usuarioAtual, setUsuarioAtual] = useState<Usuario>({} as Usuario);

  useEffect(() => {
    console.log("Usuario logado:", usuarioAtual);
  }, [usuarioAtual]);

  return (
    <ContextoUsuario.Provider
      value={{
        usuarioAtual,
        setUsuarioAtual
      }}
    >
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
