<template>
  <div>
    <h1>Agendamento de Consulta</h1>

    <input v-model="paciente" placeholder="Nome do paciente">

    <input v-model="data" type="date">

    <input v-model="horario" type="time">

    <input v-model="cep" placeholder="Digite o CEP">

    <button @click="buscarEndereco">Buscar Endereço</button>

    <p>Endereço: {{ endereco }}</p>

    <button @click="agendar">Agendar Consulta</button>
  </div>
</template>

<script>
import axios from "axios"

export default {

data(){
return{
paciente:"",
data:"",
horario:"",
cep:"",
endereco:""
}
},

methods:{

async buscarEndereco(){

const response = await axios.get(`http://localhost:3000/cep/${this.cep}`)

this.endereco = response.data.logradouro

},

agendar(){

console.log("Consulta marcada")

console.log(this.paciente,this.data,this.horario,this.endereco)

}

}

}
</script>