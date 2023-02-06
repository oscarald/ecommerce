import { defineStore } from 'pinia';
import { api } from "src/boot/axios";

export const useShopStore = defineStore('shop', {
  state: () => ({
    products: [],
    categories: [],
    loading: false,
    actualPage: 1,
    totalPages: 0,
    nextPage:0,
    prevPage:0
  }),
  getters: {

  },
  actions: {
    async getProducts(page=1) {
      try {
        this.loading = true;
        const prod = await api.get(`products?page=${page}&limit=6`);
        this.products = prod.data.docs;
        this.actualPage = prod.data.page
        this.totalPages = prod.data.totalPages
        this.nextPage = prod.data.nextPage
        this.prevPage = prod.data.prevPage
        console.log(prod.data)
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getCategories() {
      try {
        this.loading = true;
        const cat = await api.get(`categories`);
        this.categories = cat.data;
        console.log(cat.data)
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
