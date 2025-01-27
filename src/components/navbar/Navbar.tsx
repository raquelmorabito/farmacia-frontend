import "../../assets/css/style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-black text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold text-white">
            Farma&Cia
          </Link>

          <div className="flex gap-4">
            <Link to="/categorias" className="text-white hover:text-gray-400">
              Categoria
            </Link>
            <Link to="/cadastrarcategoria" className="text-white hover:text-gray-400">
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
