// src/components/categorias/listacategoria/ListaCategorias.tsx
import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service"; // Importando a função de buscar
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria"; // Certifique-se de que o caminho está correto
import { DNA } from "react-loader-spinner";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      await buscar("/categorias", setCategorias, {});
    };

    fetchCategorias();
  }, []);

  return (
    <>
      {categorias.length === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="container flex flex-col my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;
