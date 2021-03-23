<template>
  <div>
    <h2>Registro de Usuario</h2>
    <hr />
    <div class="columns is-centered">
      <div class="column is-half">
          <p>Nome:</p>
        <input
          class="input"
          type="text"
          placeholder="Nome do usuario"
          name=""
          id=""
          v-model="name"
        />
         <p>E-mail:</p>
        <input
          class="input"
          type="email"
          placeholder="email@email.com"
          name=""
          id=""
          v-model="email"
        />
         <p>Senha:</p>
        <input
          class="input"
          type="password"
          placeholder="Senha"
          name=""
          id=""
          v-model="password"
        />
        <hr>
        <button @click="register" class="button is-success">Cadastrar</button>
        
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')


export default {
    
    data(){

        return {

            name:"",
            password:"",
            email:"",

        }
    },
    methods:{
        
        register:function(){

            axios.post("https://af3a43dc75bc.ngrok.io/user",{
                
                name:this.name,
                password:this.password,
                email:this.email

            }).then(res=>{

                console.log(res.data.message)

            }).catch(err=>{

                console.log(err)
            })
        
        }
    }

};
</script>

<style scoped>
</style>