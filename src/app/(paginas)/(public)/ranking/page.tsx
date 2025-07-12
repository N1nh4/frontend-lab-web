import Cabecalho from "@/components/cabecalho";
import { UserRound } from 'lucide-react'; // Certifique-se de que 'lucide-react' está instalado: npm install lucide-react
import { FaCrown } from "react-icons/fa"; 

export default function Ranking() {
    const navLinks = [
        { id: 1, label: 'Registrar lotação', href: '/' },
        { id: 2, label: 'Ir para o mapa', href: '/mapa' },
        { id: 3, label: 'Ranking', href: '/ranking' },
        { id: 4, label: 'Entrar', href: '/entrar' },
        { id: 5, label: 'Sobre nos', href: '/sobre-nos' },
        { id: 6, label: 'Criar conta', href: '/criar-conta' },
        { id: 7, label: 'Configurações', href: '/perfil' },
    ];

    
    const rankingData = [
        { position: 1, name: 'Ana Julia', id: '#192847191', contributions: 1.697 },
        { position: 2, name: 'Ana Julia', id: '#192847191', contributions: 1.697 },
        { position: 3, name: 'Ana Julia', id: '#192847191', contributions: 1.697 },
        { position: 4, name: 'Ana Julia', id: '#192847191', contributions: 1.697 },
        { position: 5, name: 'Ana Julia', id: '#192847191', contributions: 1.697 },
        { position: 6, name: 'Ana Julia', id: '#192847191', contributions: 1.697 },
       
    ];

    const topRanked = rankingData.slice(0, 3); 

    return (
        <div>
          
            <div className="fixed top-0 left-0 w-screen h-screen -z-10" style={{ backgroundColor: '#DAE5DD' }}></div>
            
           
            <Cabecalho navLinks={navLinks} />

            
            <div className="container mx-auto px-4  "> 
                
                
                <div className="bg-white rounded-lg shadow-md p-6 h-80 max-w-[56%] mx-auto mb-20 flex justify-center items-end relative mt-6" >
                    {/* Ícone da Coroa */}
                    <div className="absolute top-4" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                        <FaCrown  className="w-12 h-10 text-yellow-300" />
                         
                    </div>
                  
                    {topRanked.map((user, index) => (
                        <div key={index} className={`flex flex-col items-center mx-7 ${index === 1 ? 'mb-9' : ''}`}> 
                            <div className="rounded-full w-28 h-28 flex items-center justify-center mb-7" style={{ backgroundColor: '#eaddff' }}>
                                
                                <UserRound className="w-26 h-26 text" style={{ color: '#523a8c' }} strokeWidth={1.5} />
                            </div>
                            <p className="leading-5 font-bold text-2xl text-green-800">{user.name}</p>
                            <p className="leading-5 text-sm text-gray-600">{user.id}</p>
                            <p className="leading-5 text-xl font-bold">{user.contributions}</p>
                        </div>
                    ))}
                </div>

                
                    <div className="grid grid-cols-3 text-green-900 font-bold text-lg border-b pb-2 mb-4">
                        <div className="mx-[19%]">Classificação</div>
                        <div className="col-span-2 mx-[10%] text-right ">Contribuições</div>
                    </div>
                    
                    {rankingData.map((item) => (
                        <div
                            key={item.position}
                            className="flex items-center justify-between mx-auto max-w-[90%] bg-white rounded-2xl mb-5 p-3 shadow"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="ml-3 font-bold text-2xl">{item.position}</span>
                                <div className="ml-15 w-12 h-12 rounded-full  flex items-center justify-center" style={{ backgroundColor: '#eaddff' }}>
                                 
                                    <UserRound className="w-11 h-11 "style={{ color: '#523a8c' }} />
                                </div>
                                
                                    <div className="ml-10 font-bold text-green-900 text-2xl">{item.name}</div>
                                    <div className="ml-2 text-gray-500 text-sm">{item.id}</div>
                                
                            </div>
                            <div className="font-bold text-2xl mr-9">{item.contributions}</div>
                        </div>
                    ))}
                
            </div>
        </div>
    );
}