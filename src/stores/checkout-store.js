import { defineStore } from 'pinia';
import { api } from "src/boot/axios";

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    data: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    finishPayment(customer, cart, amount, id) {
      try {
        const sales = api.post("sales", {
          customer,
          cart,
          amount,
          id
        });
        console.log(sales)
      } catch (error) {
        console.log(error)
      }

    },
  },
});
