import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ContratoListado from "./ContratoListado";
import ContratoRegistro from "./ContratoRegistro";
import { contratosService } from "../../services/contratos.service"

export default function Contratos() {
  const { register, handleSubmit, reset } = useForm();
  const [Contratos, setContratos] = useState([]);
  const [AccionABMC, setAccionABMC] = useState("L"); // L: listado, A: agregar
  const [Item, setItem] = useState(null);

  async function Buscar(data) {
  try {
    const response = await contratosService.buscar(data.NombreContrato);
    setContratos(response.Items || response);
  } catch (error) {
    alert("Error al buscar contratos.");
    console.error(error);
  }
}


  function Agregar() {
    setAccionABMC("A");
    setItem({
      IdContrato: 0,
      NombreContrato: "",
      FechaInicio: "",
      FechaFin: "",
      ImporteMensual: "",
      TelefonoContacto: "",
    });
  }

  async function GrabarContrato(data) {
  try {
    console.log("DATOS A ENVIAR:", data);
    await contratosService.agregar(data);
    Volver();
  } catch (error) {
    alert("Error al grabar contrato");
    console.error(error);
  }
}


  function Volver() {
    setAccionABMC("L");
    setItem(null);
    reset();
    Buscar({ NombreContrato: "" }); // Refresca la lista
  }

  return (
    <div className="container">
      <h2>Contratos</h2>

      {AccionABMC === "L" && (
        <>
          <form onSubmit={handleSubmit(Buscar)}>
            <div className="row my-3">
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Nombre Contrato"
                  {...register("NombreContrato")}
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">Buscar</button>
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-success" onClick={Agregar}>
                  Agregar
                </button>
              </div>
            </div>
          </form>
          <ContratoListado Contratos={Contratos} />
        </>
      )}

      {AccionABMC === "A" && (
<ContratoRegistro
  Item={Item}
  Grabar={GrabarContrato}
  Volver={Volver}
/>

      )}
    </div>
  );

}
