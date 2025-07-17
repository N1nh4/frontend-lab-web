export interface UnidadeMapaDTO {
    nome: string;
    lat: number;
    lng: number;
    status: string;
}

export async function getUnidadesMapa(): Promise<UnidadeMapaDTO[]> {
    try {
        const response = await fetch('http://localhost:8080/mapa', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar unidades do mapa');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar unidades do mapa:', error);
        return [];
    }
}
