import axios from "axios";

const API_URL = "http://localhost:3000/api/contratos";

export const contratosService = {
  buscar: async (nombreContrato) => {
    const response = await axios.get(API_URL, {
      params: { NombreContrato: nombreContrato }
    });
    return response.data;
  },

  agregar: async (contrato) => {
    const response = await axios.post(API_URL, contrato);
    return response.data;
  }
};
