import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {'Authorization': localStorage.getItem('token')}
});


export default createStore({
  state: {
    categorias: [],
    produtos: [],
    messages: [],
  },
  mutations: {
    cadastrarCategoria(state, payload) {
      state.categorias.push(payload);
    },

    getCategorias(state, payload) {
      state.categorias = payload.data;
    },

    cadastrarProduto(state, payload) {
      state.produtos.push(payload);
    },

    getProdutos(state, payload) {
      state.produtos = payload.data;
    },

    setErrors(state, payload) {
      state.messages = payload;
    }
  },
  actions: {
    login(ctx, data) {
      return instance.post('/login', data)
        .then((response) => {
          localStorage.setItem('token', `${response.data.token_type} ${response.data.access_token}`);

          router.push('/dashboard');
        }).catch((err) => {
          console.log(err);

          if (err.response.status == 401) {
            ctx.commit('setErrors', [{
              message: 'Usuário ou senha inválidos',
              color: 'danger'
            }]);
          }
        });
    },

    listarCategorias(ctx, data) {
      return instance.get('/categorias').then((response) => {
        ctx.commit('getCategorias', response.data);
      }).catch((err) => {
        if (err.response.status == 401) {
          next('/');
        }

        console.log(err.response.data.error);
      });
    },

    cadastrarCategoria(ctx, data) {
      return instance.post('/categorias', data).then((response) => {
        ctx.commit('cadastrarCategoria', response.data);
      }).catch((err) => {
        if (err.response.status == 401) {
          next('/');
        }

        console.log(err.response.data.error);
      });
    },

    listarProdutos(ctx, data) {
      return instance.get('/produtos', data).then((response) => {
        ctx.commit('getProdutos', response.data);
      }).catch((err) => {
        console.log(err.response.data.error);

        if (err.response.status == 401) {
          next('/');
        }
      });
    },

    cadastrarProduto(ctx, data) {
      return instance.post('/produtos', data).then((response) => {
        ctx.commit('cadastrarProduto', response.data);
      }).catch((err) => {
        console.log(err.response.data.error);

        if (err.response.status == 401) {
          next('/');
        }
      });
    },

    logout(ctx) {
      localStorage.removeItem('token');
      router.push('/');
    }
  },
})
