import { defineStore } from "pinia";
import { api } from "src/boot/axios";
export const useIndexStore = defineStore("inicio", {
  state: () => ({
    products: [],
    categories: [],
    singleProduct: {},
    loading: false,
    loadingcat:false,
    toogle: false,
    namecat: "Almuerzo"
  }),
  getters: {},
  actions: {
    async getIndexProducts(id="63eaf641ec98cdd80530042d", name = this.namecat) {
      try {
        this.loading = true;
        this.namecat = name
        this.products = []
        const prod = await api.get(`products?limit=4&category=${id}`);
        this.products = prod.data.docs;

        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getIndexCategories() {
      try {
        this.loadingcat = true;
        const cat = await api.get(`categories`);
        this.categories = cat.data;

        this.loadingcat = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getSingleProduct(id) {
      try {
        this.loading = true;
        const prod = await api.get(`products/${id}`);
        this.singleProduct = prod.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },

    async changeToogle() {
      this.toogle = !this.toogle
    },
  },
});
