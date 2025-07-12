import { useContext } from "react";


const useUsuario = () => {
    const contexto = null;

    if (!contexto) {
        throw new Error("useUsuario deve ser usado dentro de um ContextoUsuarioProvider");
    }

    return contexto;
}

export default useUsuario;