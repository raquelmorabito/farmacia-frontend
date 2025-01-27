import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao buscar a categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/${id}`, categoria, setCategoria);
        alert("A categoria foi atualizada com sucesso!");
      } catch (error: any) {
        alert("Erro ao atualizar a categoria.");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("A categoria foi cadastrada com sucesso!");
      } catch (error: any) {
        alert("Erro ao cadastrar a categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold mb-6 text-white">{id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}</h1>

      <form onSubmit={gerarNovaCategoria} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="nome" className="text-lg font-semibold mb-2 text-white">
            Nome da Categoria
          </label>
          <input
            type="text"
            placeholder="Digite o nome da Categoria"
            name="nome"
            className="border-2 border-gray-600 rounded p-2 bg-gray-700 text-white"
            value={categoria.nome}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex gap-4 justify-between">
          <button
            type="submit"
            className="w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-800 transition"
          >
            {isLoading ? (
              <RotatingLines strokeColor="white" strokeWidth="5" width="24" visible={true} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCategoria;
