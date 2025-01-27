import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cadastrar, atualizar, buscar } from "../../../services/Service"; // Importando as funções
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      buscar<Categoria>(`/categorias/${id}`, setCategoria, {});
    }
  }, [id]);

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  };

  const gerarNovaCategoria = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id) {
        await atualizar(`/categorias`, categoria, setCategoria, {});
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria, {});
        alert("Categoria cadastrada com sucesso!");
      }
    } catch (error) {
      alert("Erro ao cadastrar ou atualizar categoria.");
    }

    setIsLoading(false);
    navigate("/categorias");
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>
      <form onSubmit={gerarNovaCategoria} className="w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da categoria</label>
          <input
            type="text"
            name="nome"
            value={categoria.nome}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2"
            placeholder="Digite o nome da categoria"
          />
        </div>
        <button
          type="submit"
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
