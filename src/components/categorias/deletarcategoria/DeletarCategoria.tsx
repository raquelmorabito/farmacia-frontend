// src/components/categorias/deletarcategoria/DeletarCategoria.tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service"; // Importando as funções do Service
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      buscar(`/categorias/${id}`, setCategoria, {});
    }
  }, [id]);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deletar(`/categorias/${id}`, {});
      alert("Categoria deletada com sucesso!");
      navigate("/categorias");
    } catch (error) {
      alert("Erro ao deletar a categoria.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      {categoria ? (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
            Categoria
          </header>
          <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.nome}</p>
          <div className="flex">
            <button
              className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
              onClick={() => navigate("/categorias")}
            >
              Não
            </button>
            <button
              className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
              onClick={handleDelete}
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
                <span>Sim</span>
              )}
            </button>
          </div>
        </div>
      ) : (
        <p>Categorias não encontradas.</p>
      )}
    </div>
  );
}

export default DeletarCategoria;
