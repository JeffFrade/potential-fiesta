import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

export default createStore({
  state: {
    
  },
  getters: {
  },
  mutations: {

  },
  actions: {
    login(ctx, data) {
      return axios.post('http://localhost:8100/api/login', data)
        .then((response) => {
          localStorage.setItem('token', `${response.data.token_type} ${response.data.access_token}`);

          router.push('dashboard');
        }).catch((err) => {
          console.log(err);
          console.log(err.response.data.error);
        });
    }
  },
})
