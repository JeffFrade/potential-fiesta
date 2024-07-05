<template>
  <div>
    <input type="email" v-model="email" placeholder="E-mail">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login()">Login</button>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          email: '',
          password: ''
        }
      },

      methods: {
        login() {
          this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          });
        }
      }
    }
</script>
