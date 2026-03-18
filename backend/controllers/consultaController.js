const axios = require("axios")

// buscar endereço pelo CEP
exports.buscarCep = async (req,res)=>{

const cep = req.params.cep

const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

res.json(response.data)

}

// verificar clima no dia da consulta
exports.verificarClima = async (req,res)=>{

const cidade = req.params.cidade

const apiKey = "83a1c85dabb4628fc6eb5bf6623616a2"

try{

const response = await axios.get(
`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br`
)

const clima = response.data.weather[0].description

res.json({
cidade: cidade,
clima: clima
})

}catch(error){

res.status(500).json({
erro: "Erro ao consultar clima"
})

}

}