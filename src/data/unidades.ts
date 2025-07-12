export const StatusEnum = {
    VAZIO: "VAZIO",
    POUCO_VAZIO: "POUCO_VAZIO",
    MODERADO: "MODERADO",
    CHEIO: "CHEIO",
    MUITO_CHEIO: "MUITO_CHEIO",
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
    comentarios?: Comentario[];
  }

export interface Comentario {
    id: number;
    unidadeId: number; 
    autor: string;
    avatar?: string;
    texto: string;
    data: string;
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
      comentarios: [
        {
          id: 1,
          unidadeId: 1, // Associando o comentário à unidade
          autor: "João Silva", 
          avatar: "",
          texto: "Ótimo atendimento, muito rápido!",
          data: "2023-10-01 14:30",
        },
        {
          id: 2,
          unidadeId: 1, // Associando o comentário à unidade
          autor: "Maria Oliveira",
          avatar: "/images/avatar2.png",
          texto: "Ambiente limpo e organizado.",
          data: "2023-10-01 15:00",
        },
        {
          id: 3,
          unidadeId: 1, // Associando o comentário à unidade
          autor: "Hugo",
          avatar: "/images/avatar2.png",
          texto: "teste",
          data: "2023-10-01 15:00",
        }

      ]
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
      comentarios: [],
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


