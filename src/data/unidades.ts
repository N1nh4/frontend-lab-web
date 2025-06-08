export const StatusEnum = {
    VAZIO: "VAZIO",
    POUCO_VAZIO: "POUCO VAZIO",
    MODERADO: "MODERADO",
    CHEIO: "CHEIO",
    MUITO_CHEIO: "MUITO CHEIO",
} as const;

export type StatusType = typeof StatusEnum[keyof typeof StatusEnum];

export interface UnidadeSaude {
    id: number;
    titulo: string;
    avaliacaoEstrela: number;
    endereco: string;
    telefone: string;
    status: StatusType;
    ultimaAtualizacao: string;
    imagem: string;
  }

export const allUnidadesData: UnidadeSaude[] = [
    {
      id: 1,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 2,
      titulo: "UPA 24h",
      avaliacaoEstrela: 3.5,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.POUCO_VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 3,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.MODERADO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 4,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.CHEIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 5,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.MUITO_CHEIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 6,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 7,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 8,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 9,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
    {
      id: 10,
      titulo: "UPA 24h",
      avaliacaoEstrela: 4.0,
      endereco: "Rua das Flores muito grande e loge de tudo, 123",
      telefone: "(71) 1234-5678",
      status: StatusEnum.VAZIO,
      ultimaAtualizacao: "ultima atualização há 2 horas",
      imagem: "/images/upa.png",
    },
];


