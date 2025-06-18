import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ContratoRegistro({ Item, Grabar, Volver }) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
    reset,
  } = useForm({
    defaultValues: Item,
  });

  useEffect(() => {
    if (Item) reset(Item);
  }, [Item]);

  const onSubmit = (data) => {
    console.log("Datos a grabar:", data);
    Grabar(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">
        {/* Campo NombreContrato */}
        <div className="row">
          <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="NombreContrato">
              Nombre Contrato<span className="text-danger">*</span>:
            </label>
          </div>
          <div className="col-sm-8 col-md-6">
            <input
              type="text"
              {...register("NombreContrato", {
                required: { value: true, message: "Campo requerido" },
                minLength: { value: 5, message: "Debe tener al menos 5 caracteres" },
                maxLength: { value: 70, message: "No debe superar los 70 caracteres" },
              })}
              className={"form-control " + (errors?.NombreContrato ? "is-invalid" : "")}
            />
            <div className="invalid-feedback">
              {errors?.NombreContrato?.message}
            </div>
          </div>
        </div>

        {/* Campo FechaInicio */}
        <div className="row">
          <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="FechaInicio">
              Fecha Inicio<span className="text-danger">*</span>:
            </label>
          </div>
          <div className="col-sm-8 col-md-6">
            <input
              type="date"
              {...register("FechaInicio", {
                required: { value: true, message: "Campo requerido" },
              })}
              className={"form-control " + (errors?.FechaInicio ? "is-invalid" : "")}
            />
            <div className="invalid-feedback">{errors?.FechaInicio?.message}</div>
          </div>
        </div>

        {/* Campo FechaFin */}
        <div className="row">
          <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="FechaFin">
              Fecha Fin<span className="text-danger">*</span>:
            </label>
          </div>
          <div className="col-sm-8 col-md-6">
            <input
              type="date"
              {...register("FechaFin", {
                required: { value: true, message: "Campo requerido" },
              })}
              className={"form-control " + (errors?.FechaFin ? "is-invalid" : "")}
            />
            <div className="invalid-feedback">{errors?.FechaFin?.message}</div>
          </div>
        </div>

        {/* Campo ImporteMensual */}
        <div className="row">
          <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="ImporteMensual">
              Importe Mensual<span className="text-danger">*</span>:
            </label>
          </div>
          <div className="col-sm-8 col-md-6">
            <input
              type="number"
              step="0.01"
              {...register("ImporteMensual", {
                required: { value: true, message: "Campo requerido" },
                min: { value: 1, message: "Debe ser mayor a 0" },
              })}
              className={"form-control " + (errors?.ImporteMensual ? "is-invalid" : "")}
            />
            <div className="invalid-feedback">{errors?.ImporteMensual?.message}</div>
          </div>
        </div>

        {/* Campo TelefonoContacto */}
        <div className="row">
          <div className="col-sm-4 col-md-3 offset-md-1">
            <label className="col-form-label" htmlFor="TelefonoContacto">
              Teléfono<span className="text-danger">*</span>:
            </label>
          </div>
          <div className="col-sm-8 col-md-6">
            <input
              type="tel"
              {...register("TelefonoContacto", {
                required: { value: true, message: "Campo requerido" },
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Debe tener entre 10 y 15 dígitos",
                },
              })}
              className={"form-control " + (errors?.TelefonoContacto ? "is-invalid" : "")}
            />
            <div className="invalid-feedback">{errors?.TelefonoContacto?.message}</div>
          </div>
        </div>

        {/* Botones */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            <button type="submit" className="btn btn-primary me-2">
              <i className="fa fa-check"></i> Grabar
            </button>
            <button type="button" className="btn btn-warning" onClick={Volver}>
              <i className="fa fa-undo"></i> Cancelar
            </button>
          </div>
        </div>

        {/* Validación global */}
        {!isValid && isSubmitted && (
          <div className="row alert alert-danger mensajesAlert mt-3">
            <i className="fa fa-exclamation-sign"></i> Revisar los datos ingresados...
          </div>
        )}
      </div>
    </form>
  );
}
