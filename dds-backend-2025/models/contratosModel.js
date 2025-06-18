const { DataTypes } = require("sequelize");
const sequelize = require("./configurarSequelize");

const Contrato = sequelize.define("contratos", {
  IdContrato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NombreContrato: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "El nombre del contrato es requerido" },
      len: { args: [5, 100], msg: "Debe tener entre 5 y 100 caracteres" },
    },
  },
  FechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  FechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  ImporteMensual: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
      min: 1,
    },
  },
  TelefonoContacto: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: { msg: "El teléfono es requerido" },
    },
  },
});

module.exports = Contrato;
