'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Circle } from 'lucide-react';
import ReactDOMServer from 'react-dom/server';
import Cabecalho from '@/components/cabecalho';
import { useEffect, useState } from 'react';
import { getUnidadesMapa, UnidadeMapaDTO } from '@/service/mapa';

type StatusCor = 'verde' | 'amarelo' | 'vermelho';

const corPorStatus: Record<StatusCor, string> = {
  verde: '#22c55e',
  amarelo: '#eab308',
  vermelho: '#ef4444',
};

function criarIcone(status: StatusCor): L.DivIcon {
  const cor = corPorStatus[status];

  const iconHtml = ReactDOMServer.renderToString(
    <Circle stroke='white' color={cor} fill={cor} strokeWidth={2} size={20} />
  );

  return L.divIcon({
    html: iconHtml,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
}

export default function Mapa() {

  const [upas, setUpas] = useState<UnidadeMapaDTO[]>([]);

  useEffect(() => {
    getUnidadesMapa().then(setUpas);
  }, []);

  const definirCor = (status: string): StatusCor => {
    switch (status) {
      case 'VAZIO': return 'verde';
      case 'POUCO_VAZIO': return 'verde';
      case 'MODERADO': return 'amarelo';
      case 'CHEIO': return 'vermelho';
      case 'MUITO_CHEIO': return 'vermelho';
      default: return 'verde';
    }
  };

  const navLinks = [
    { id: 1, label: 'Registrar lotação', href: '/' },
    { id: 2, label: 'Ir para o mapa', href: '/mapa' },
    { id: 3, label: 'Ranking', href: '/ranking' },
    { id: 4, label: 'Entrar', href: '/entrar' },
    { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
    { id: 6, label: 'Criar conta', href: '/criar-conta' },
    { id: 7, label: 'Configurações', href: '/perfil' },
  ];

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <Cabecalho navLinks={navLinks} />
      <div className="flex-1 z-0 mt-16">
        <MapContainer
          center={[-12.97, -38.51]}
          zoom={12}
          scrollWheelZoom={true}
          className="h-full w-full rounded-none"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap"
          />
          {upas.map((upa, idx) => (
            <Marker
              key={idx}
              position={[upa.lat, upa.lng]}
              icon={criarIcone(definirCor(upa.status))}
            >
              <Popup>{upa.nome}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
