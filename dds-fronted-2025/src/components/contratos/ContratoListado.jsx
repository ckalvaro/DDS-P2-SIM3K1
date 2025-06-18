import React from "react";

export default function ContratoListado({ Contratos }) {
  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Importe Mensual</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {Contratos?.map((item) => (
          <tr key={item.IdContrato}>
            <td>{item.NombreContrato}</td>
            <td>{new Date(item.FechaInicio).toLocaleDateString()}</td>
            <td>{new Date(item.FechaFin).toLocaleDateString()}</td>
            <td>${item.ImporteMensual.toFixed(2)}</td>
            <td>{item.TelefonoContacto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
