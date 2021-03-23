<template>
  <div>
    <h1>Painel Adm</h1>

    <table class="table">
      <thead>
        <tr>
          <th><abbr title="Nome">Nome</abbr></th>
          <th><abbr title="Email">E-mail</abbr></th>
          <th><abbr title="Cargo">Cargo</abbr></th>
          <th><abbr title="Cargo">Ações</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role | processRole }}</td>
          <td>
            <button class="button is-small">Editar</button>|<button
              class="button is-small"
            >
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  created() {
    var header = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .get("http://ba1fa980b5ae.ngrok.io/user", header)
      .then((response) => {
        console.log(response);
        this.users = response.data.users;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      users: [],
    };
  },
  filters: {
    processRole: function (value) {
      if (value == 0) {
        return "Usuário comum";
      } else if (value == 1) {
        return "Admin";
      }
    },
  },
};
</script>
<style scoped>
</style>