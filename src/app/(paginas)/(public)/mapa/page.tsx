'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Circle } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';
import Cabecalho from '@/components/cabecalho';

type StatusCor = 'verde' | 'amarelo' | 'vermelho';

const upas: { nome: string; lat: number; lng: number; status: StatusCor }[] = [
  { nome: 'UPA 1', lat: -12.97, lng: -38.50, status: 'verde' },
  { nome: 'UPA 2', lat: -12.96, lng: -38.52, status: 'amarelo' },
  { nome: 'UPA 3', lat: -12.95, lng: -38.51, status: 'vermelho' },
];

// Define a cor para cada status
const corPorStatus: Record<StatusCor, string> = {
  verde: '#22c55e',    // Tailwind: green-500
  amarelo: '#eab308',  // Tailwind: yellow-500
  vermelho: '#ef4444', // Tailwind: red-500
};

// Cria um ícone com base no status
function criarIcone(status: StatusCor): L.DivIcon {
  const cor = corPorStatus[status];

  const iconHtml = ReactDOMServer.renderToString(
    <Circle stroke='white' color={cor} fill={cor} strokeWidth={2} size={20} />
  );

  return L.divIcon({
    html: iconHtml,
    className: '', // remove padding extra
    iconSize: [32, 32],
    iconAnchor: [16, 32], // centraliza na base
  });
}

export default function Mapa() {
    const navLinks = [
        { id: 1, label: 'Registrar lotação', href: '/inicial' },
        { id: 2, label: 'Ir para o mapa', href: '/mapa' },
        { id: 3, label: 'Ranking', href: '/ranking' },
        { id: 4, label: 'Entrar', href: '/entrar' },
        { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
        { id: 6, label: 'Criar conta', href: '/criar-conta' },
    ]
  return (
    <div className="h-dvh w-full">
      <Cabecalho navLinks={navLinks} />
      <MapContainer
        center={[-12.97, -38.51]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full rounded-xl shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        {upas.map((upa, idx) => (
          <Marker
            key={idx}
            position={[upa.lat, upa.lng]}
            icon={criarIcone(upa.status)}
          >
            <Popup>{upa.nome}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
