const express = require("express");
const router = express.Router();
const { Op, ValidationError } = require("sequelize");

const contratos = require("../models/contratosModel");

// GET /api/contratos
router.get("/api/contratos", async (req, res) => {
  try {
    let where = {};
    if (req.query.NombreContrato) {
      where.NombreContrato = {
        [Op.like]: `%${req.query.NombreContrato}%`
      };
    }

    const resultado = await contratos.findAll({
      where,
      order: [["NombreContrato", "ASC"]]
    });

    res.json(resultado);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener contratos" });
  }
});

// POST /api/contratos
router.post("/api/contratos", async (req, res) => {
  try {
    const contrato = await contratos.create(req.body);
    res.status(201).json(contrato);
  } catch (err) {
    if (err instanceof ValidationError) {
      const messages = err.errors.map(x => `${x.path}: ${x.message}`).join('\n');
      res.status(400).json({ message: messages });
    } else {
      throw err;
    }
  }
});

module.exports = router;
