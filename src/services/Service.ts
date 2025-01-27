import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmacia-jk1x.onrender.com' 
});

export const buscar = async <T>(url: string, setDados: React.Dispatch<React.SetStateAction<T>>, header: Record<string, string> = {}) => {
  try {
    const resposta = await api.get<T>(url, { headers: header });
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

export const deletar = async (url: string, header: Record<string, string> = {}) => {
  try {
    await api.delete(url, { headers: header });
  } catch (error) {
    console.error("Erro ao deletar item:", error);
  }
};

export const cadastrar = async <T>(url: string, dados: T, setDados: React.Dispatch<React.SetStateAction<T>>, header: Record<string, string> = {}) => {
  try {
    const resposta = await api.post<T>(url, dados, { headers: header });
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar item:", error);
  }
};

export const atualizar = async <T>(url: string, dados: T, setDados: React.Dispatch<React.SetStateAction<T>>, header: Record<string, string> = {}) => {
  try {
    const resposta = await api.put<T>(url, dados, { headers: header });
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao atualizar item:", error);
  }
};
