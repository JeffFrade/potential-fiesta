<template>
  <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Login</h3>

            <div class="form-outline mb-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa fa-fw fa-solid fa-envelope"></i></span>
                <input type="email" id="typeEmailX-2" class="form-control form-control-lg" v-model="email" placeholder="E-mail"/>
              </div>
            </div>

            <div class="form-outline mb-4">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa fa-fw fa-solid fa-lock"></i></span>
                <input type="password" id="typePasswordX-2" class="form-control form-control-lg"  v-model="password" placeholder="Senha"/>
              </div>
            </div>

            <button class="btn btn-primary btn-lg btn-block" @click="login()"><i class="fa fa-fw fa-solid fa-right-to-bracket"></i>&nbsp; Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Toastr v-for="(message, index) in $store.state.messages" :key="index" :params="message"/>
</section>
</template>

<script>
    import Toastr from '@/components/Toastr.vue'

    export default {
      data() {
        return {
          email: '',
          password: ''
        }
      },
      components: {
        Toastr
      },
      mounted() {
        localStorage.removeItem('token');
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
