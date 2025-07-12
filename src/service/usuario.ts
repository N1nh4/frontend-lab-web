async function criarUsuario(nome: string, email: string, senha: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/criar-conta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, senha }),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar o usuário.');
        }

        return response.json();
    } catch (error) {
        console.error('Erro ao criar o usuário:', error);
        throw error;
    }
}

async function login(email: string, senha: string, tipo: "cliente" | "funcionario" = "cliente") {
    const url =
        tipo === "cliente"
            ? "http://localhost:8080/entrar"
            : "http://localhost:8080/entrar-funcionario";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao entrar');
        }

        localStorage.setItem("usuarioLogado", JSON.stringify(data));

        return data;
    } catch (error) {
        console.error('Erro ao entrar:', error);
        throw error;
    }
}



export {
    criarUsuario,
    login
}