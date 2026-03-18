<template>
  <div>
    <h1>Login</h1>

    <input v-model="email" placeholder="Email">

    <input v-model="senha" type="password" placeholder="Senha">

    <button @click="login">Entrar</button>

  </div>
</template>

<script>
export default {

data(){
return{
email:"",
senha:""
}
},

methods:{

login(){
console.log("Login:",this.email,this.senha)
}

}

}
</script>