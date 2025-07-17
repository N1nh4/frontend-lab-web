export async function getRankingClientes() {
    const response = await fetch('http://localhost:8080/ranking');
    return response.json();
}
