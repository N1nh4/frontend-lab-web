// src/lib/utils/rendering.ts

// É importante importar o React e os ícones aqui, pois as funções retornam JSX
import React from 'react';
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb"; // @types/react-icons instalado
import { User } from "lucide-react"; // lucide-react já tem tipos embutidos
import { StatusEnum, StatusType } from '@/data/unidades'; // Caminho corrigido com '@/data'

// Função para renderizar estrelas com base na avaliação
export const renderStars = (avaliacao: number, iconSize: number = 18) => {
  const totalStars = 5;
  const stars = [];

  const filledStars = Math.floor(avaliacao);
  const hasHalfStar = (avaliacao % 1) >= 0.5;

  // Renderiza estrelas cheias
  for (let i = 0; i < filledStars; i++) {
    stars.push(<TbStarFilled key={`filled-${i}`} size={iconSize} color="black" />);
  }
  // Renderiza meia estrela, se aplicável
  if (hasHalfStar) {
    stars.push(<TbStarHalfFilled key={`half-star`} size={iconSize} color="black" />);
  }
  // Renderiza estrelas vazias
  const emptyStarsCount = totalStars - stars.length;
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<TbStar key={`empty-${i}`} size={iconSize} color="black" />);
  }
  return stars;
};

// Mapeia o status para quantidade de ícones de usuário e suas cores
export const getStatusColorLotacao = (status: StatusType) => {
  switch (status) {
    case StatusEnum.VAZIO: return "text-emerald-500";
    case StatusEnum.POUCO_VAZIO: return "text-emerald-500";
    case StatusEnum.MODERADO: return "text-amber-500";
    case StatusEnum.CHEIO: return "text-red-500";
    case StatusEnum.MUITO_CHEIO: return "text-red-500";
    default: return "text-zinc-500";
  }
};

export const getCapacityFromStatus = (status: StatusType) => {
  switch (status) {
    case StatusEnum.VAZIO: return 1;
    case StatusEnum.POUCO_VAZIO: return 2;
    case StatusEnum.MODERADO: return 3;
    case StatusEnum.CHEIO: return 4;
    case StatusEnum.MUITO_CHEIO: return 5;
    default: return 0;
  }
};

// Renderiza os ícones de usuário com base no status
export const renderUserIcons = (status: StatusType, iconSize: number = 18) => {
  const totalIcons = 5;
  const userIcons = [];

  const filledColorClass = getStatusColorLotacao(status);
  const emptyColor = "gray";

  const capacidade = getCapacityFromStatus(status);

  for (let i = 0; i < capacidade; i++) {
    userIcons.push(
      <User key={`user-filled-${i}`} size={iconSize} className={filledColorClass} fill="currentColor" />
    );
  }
  const emptyIconsCount = totalIcons - userIcons.length;
  for (let i = 0; i < emptyIconsCount; i++) {
    userIcons.push(
      <User key={`user-empty-${i}`} size={iconSize} fill="none" stroke={emptyColor} strokeWidth={1.5} />
    );
  }
  return userIcons;
};