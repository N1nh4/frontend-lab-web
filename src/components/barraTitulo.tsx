interface BarraTituloProps {
    titulo: string;    
}

export default function BarraTitulo({ titulo }: BarraTituloProps) {
    const shadowTitle = {
        boxShadow: '4px 8px 15px rgba(0, 0, 0, 0.25)',
    };

    return (
        <div 
            className="sticky top-16 z-50 bg-verdeEscuro h-24 w-full flex items-center "
            style={shadowTitle}
        >
            <div className="flex font-bold items-center justify-start pl-32 h-full text-white text-2xl">
                <h1>{titulo}</h1>
            </div>
        </div>
    );
}