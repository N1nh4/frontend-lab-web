import Link from "next/link";


interface NavLink {
  id: number;
  href: string;
  label: string;
}


interface CabecalhoProps {
  navLinks: NavLink[];
}


export default function Cabecalho({ navLinks }: CabecalhoProps) {
  const shadowStyle = {
    boxShadow: "4px 8px 15px rgba(0, 0, 0, 0.25)",
  };


  return (
    <header
      className="w-full h-24 bg-gradient-to-r from-[#004E4C] to-verdeClaro"
      style={shadowStyle} // Aplica a sombra aqui
    >
      <div className="h-full flex items-center px-14 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/inicial"
          >
            <span className="text-3xl font-bold text-white">UpaAgora</span>
          </Link>
        </div>


        {/* Navegação */}
        <nav className="flex items-center space-x-14 text-3xl">
          {navLinks.map((link, id) => (
            <Link
              href={link.href}
              key={id}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>


  );
}