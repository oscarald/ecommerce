import { defineStore } from "pinia";
import { api } from "src/boot/axios";
export const useIndexStore = defineStore("inicio", {
  state: () => ({
    products: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async getIndexProducts() {
      try {
        this.loading = true;
        const prod = await api.get("http://localhost:3000/products");
        this.products = prod.data;
        console.log(prod.data)
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
