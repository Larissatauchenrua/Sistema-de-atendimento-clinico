const mongoose = require("mongoose")

const ConsultaSchema = new mongoose.Schema({
  paciente: String,
  data: String,
  horario: String,
  cep: String,
  endereco: String
})

module.exports = mongoose.model("Consulta", ConsultaSchema)