<template>
  <div>
    <h2>Login</h2>
    <hr />
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="notification is-info">
          <div>
            <div v-if="error != ''" class="notification is-danger">
              <p>{{ error }}</p>
            </div>
            <hr />
          </div>
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
          <hr />
          <button @click="login" class="button is-success">Logar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//const axios = require("axios");

export default {
  data() {
    return {
      password: "",
      email: "",
      error: "",
    };
  },
  methods: {
    login: function () {
      console.log("login");
    },
  },
};
</script>

<style scoped>
</style>