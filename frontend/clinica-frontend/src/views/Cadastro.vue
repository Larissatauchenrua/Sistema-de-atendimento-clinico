<template>
  <div>
    <h1>Cadastro</h1>

    <input v-model="nome" placeholder="Nome">
    <input v-model="email" placeholder="Email">
    <input v-model="senha" type="password" placeholder="Senha">

    <button @click="cadastrar">Cadastrar</button>

  </div>
</template>

<script>
import axios from "axios"

export default {

data(){
return{
nome:"",
email:"",
senha:""
}
},

methods:{

async cadastrar(){

await axios.post("http://localhost:3000/auth/cadastro",{

nome:this.nome,
email:this.email,
senha:this.senha

})

alert("Usuário cadastrado!")

}

}

}
</script>