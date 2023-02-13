import { defineStore } from 'pinia';
import { api } from "src/boot/axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {},
    token: "",
    isAdmin: false,
    err: ""
  }),
  getters: {

  },
  actions: {
    async login(email,password) {
      try {
        this.err = ""
        const user = await api.post("users/login", {
          email,
          password,
        });
        this.user = user.data
        this.token = user.data.token
        this.isAdmin = user.data.isAdmin

      } catch (error) {
        this.err = error.response?.data?.error;

      }
    },
    async register(name,email,password) {
      try {
        this.err = ""
        const user = await api.post("users", {
          name,
          email,
          password,
        });
        this.user = user.data
        this.token = user.data.token
        this.isAdmin = user.data.isAdmin

      } catch (error) {
        this.err = error.response?.data?.error;

      }
    },
    logout(){
      this.user = {},
      this.token= "",
      this.isAdmin= false,
      this.err= ""
    }
  },
});
