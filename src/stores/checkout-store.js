import { defineStore } from 'pinia';
import { api } from "src/boot/axios";
import { useShoppingStore } from "src/stores/shopping-cart-store";
const shoppingStore = useShoppingStore();

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
        shoppingStore.resetCart()
        console.log(sales)
      } catch (error) {
        console.log(error)
      }

    },
  },
});
