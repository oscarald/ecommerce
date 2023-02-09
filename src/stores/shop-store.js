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
    prevPage:0,
    limitPage:6,
    filter: "all",
    idCategory: ""
  }),
  getters: {

  },
  actions: {
    async getProducts(page=1) {
      try {
        this.loading = true;
        const prod = await api.get(`products?page=${page}&limit=${this.limitPage}`);
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
    async filterByCategory(page=1) {
      try {
        this.loading = true;
        const prod = await api.get(`products?page=${page}&limit=${this.limitPage}&category=${this.idCategory}`);
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

    async filterByRate(page=1) {
      try {
        this.loading = true;
        const prod = await api.get(`products/rate?page=${page}&limit=${this.limitPage}&order=desc`);
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

    async filterByPrice(page=1,price) {

      try {
        this.loading = true;
        const prod = await api.get(`products/price?page=${page}&limit=${this.limitPage}&order=${price}`);
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

    async filterByDate(page=1) {
      try {
        this.loading = true;
        const prod = await api.get(`products/date?page=${page}&limit=${this.limitPage}&order=desc`);
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

    async filterBetweenPrice(page=1,min,max) {
      try {
        this.loading = true;
        const prod = await api.get(`products/between?page=${page}&limit=${this.limitPage}&min=${min}&max=${max}`);
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

    async searchProduct(page=1,search) {
      try {
        this.loading = true;
        const prod = await api.get(`products/search?page=${page}&limit=${this.limitPage}&search=${search}`);
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
    changeFilter(filter){
      this.filter=filter
    },
    saveCategory(id){
      this.idCategory=id
    },


  },
});
