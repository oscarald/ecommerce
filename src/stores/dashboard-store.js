import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useDashboardStore = defineStore("sales", {
  state: () => ({
    sales: [],
    loading: false,
    products: [],
    categories: [],
    users: []
  }),
  getters: {},
  actions: {
    async getSales() {
      try {
        this.loading = true;
        const sale = await api.get("sales");
        this.sales = sale.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async updateSales(id, status) {
      try {
        this.loading = true;
        const sale = await api.put("sales", {
          id,
          status,
        });

        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getProducts() {
      try {
        this.loading = true;
        const prod = await api.get("products/all");
        this.products = prod.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async updateProducts(id, name, description, price, imgUrl) {
      try {
        this.loading = true;
        const prod = await api.put("products", {
          id,
          name,
          description,
          price,
          imgUrl,
        });
        this.getProducts()
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async newProduct( name, description, price, imgUrl ) {
      try {
        this.loading = true;
        const prod = await api.post("products", {
          name,
          description,
          price,
          imgUrl,
        });
        this.getProducts()
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getCategories() {
      try {
        this.loading = true;
        const cat = await api.get("categories");
        this.categories = cat.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async newCategory( name, imgUrl ) {
      try {
        this.loading = true;
        const cat = await api.post("categories", {
          name,
          imgUrl,
        });
        this.getCategories()
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async getUsers() {
      try {
        this.loading = true;
        const user = await api.get("users");
        this.users = user.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
