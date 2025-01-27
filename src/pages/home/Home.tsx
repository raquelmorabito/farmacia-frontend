import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buscar } from "../../services/Service"; 
import Categoria from "../../models/Categoria"; 
import CardCategoria from "../../components/categorias/cardcategoria/CardCategoria";

function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      await buscar("/categorias", setCategorias);
    };
    fetchCategorias();
  }, []);

  return (
    <>
      <div className="bg-black flex justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Farma&Cia!</h2>
            <p className="text-xl">A companhia certa para o seu bem-estar</p>

            <div className="mt-6">
              <Link
                to="/cadastrarcategoria"
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cadastrar Categoria
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-6 md:mt-0">
            <img
              src="https://i.imgur.com/OtxhuTh.png"
              alt="Imagem Página Home"
              className="w-2/5"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-6">
        <div className="container flex flex-wrap justify-around gap-6">
          {categorias.length > 0 ? (
            categorias.map((categoria) => (
              <div
                key={categoria.id}
                className="w-80 h-48 mb-6" // Tamanho fixo para os cards
              >
                <CardCategoria categoria={categoria} />
              </div>
            ))
          ) : (
            <p className="text-center text-black">Carregando categorias...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
