"use client";

import Head from 'next/head';
import { FcGoogle } from "react-icons/fc";
import { useState } from "react"
import { login } from '@/service/usuario';
import { useRouter } from 'next/navigation';
import { useUsuario } from '@/data/context/UsuarioContexto';
import { Usuario } from '@/data/context/UsuarioContexto';


export default function Entrar() {

  const navegacao = useRouter();
  const [tipoUsuario, setTipoUsuario] = useState<"cliente" | "funcionario">("cliente");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { setUsuarioAtual } = useUsuario();

  const entrar = async () => {
    try {
      const resposta = await login(email, senha, tipoUsuario);

      if (resposta?.mensagem === "Login realizado com sucesso") {

        setUsuarioAtual({
          usuarioId: resposta.usuarioId,
          nome: resposta.nome,
          email: resposta.email,
        });

        if (resposta.usuarioId) {
          console.log("ID do usuário:", resposta.usuarioId);

          localStorage.setItem("usuarioLogado", JSON.stringify(resposta));
        } else {
          console.warn("ID do usuário não encontrado na resposta.");
        }
       
        navegacao.push("/");
      } else {
        alert(resposta.mensagem || "Erro ao entrar");
      }

    } catch (error: any) {
      alert(error.mensagem || "Erro ao entrar");
    }
  };


  return (
    <div className="pt-0">
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center p-4 overflow-y-auto">
        {/* Camada para o efeito de corte diagonal */}
       

        <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Bem vindo de volta!</h1>

          <div className="space-y-4">
           

            {/* Campo Digite seu email */}
            <div className="relative">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu email"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            {/* Campo Senha */}
            <div className="relative">
              <input
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                placeholder="************"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-700"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>

            {/* Checkbox Lembre-me */}
            <div className="flex items-center justify-start mt-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-gray-700 text-sm">Lembre-me</label>
            </div>

            <div className="mb-4 flex justify-center gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="cliente"
                  checked={tipoUsuario === "cliente"}
                  onChange={() => setTipoUsuario("cliente")}
                  className="form-radio text-emerald-600"
                />
                <span className="ml-2">Cliente</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="funcionario"
                  checked={tipoUsuario === "funcionario"}
                  onChange={() => setTipoUsuario("funcionario")}
                  className="form-radio text-emerald-600"
                />
                <span className="ml-2">Funcionário</span>
              </label>
            </div>

            {/* Botão Cadastrar */}
            <button onClick={entrar} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
              Entrar
            </button>

            {/* Texto "Ao criar a conta..." */}
            <p className="text-gray-600 text-xs mt-4">
              Ao criar a conta você aceita nossas{' '}
              <a href="#" className="text-emerald-600 hover:underline">Termos de uso</a> e{' '}
              <a href="#" className="text-emerald-600 hover:underline">Política de privacidade</a>
            </p>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            {/* Botão Entrar com o Google */}
            <button className="w-full flex items-center justify-center border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300 text-gray-700 font-medium">
              <div className="flex items-center justify-center w-6 h-6 mr-3">
                <FcGoogle /> 
              </div>
              
              Entrar com o Google
            </button>

            {/* Link Já possui conta? */}
            <p className="text-gray-600 mt-6 text-sm">
              Não possui conta?{' '}
              <a href="#" className="text-emerald-600 hover:underline font-semibold">Cadastre-se aqui</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}