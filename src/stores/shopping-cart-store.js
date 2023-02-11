import { defineStore } from 'pinia';

export const useShoppingStore = defineStore('shopping', {
  state: () => ({
    cart: [],
    total: 0
  }),
  getters: {

  },
  actions: {
    addShoppingCart(product) {
      if((this.cart.filter(c => product._id == c._id)).length < 1){
        const prod = product
        prod.quantity = 1
        this.cart.push(prod)
        this.total = this.total + prod.price
      }
      else{
        const prod = this.cart.filter(p => product._id == p._id)
        prod[0].quantity++
        this.total = this.total + prod[0].price
      }
    },
    incrementQuantity(product) {
      const prod = this.cart.filter(p => product._id == p._id)
      prod[0].quantity++
      this.total = this.total + prod[0].price
    },
    decrementQuantity(product) {
      const prod = this.cart.filter(p => product._id == p._id)
      prod[0].quantity--
      this.total = this.total - prod[0].price
    },
    deleteProduct(product) {
      const deleteprod = this.cart.filter(p => product._id == p._id)
      const prod = this.cart.filter(p => product._id !== p._id)
      this.cart = prod
      this.total = this.total - deleteprod[0].price*deleteprod[0].quantity
    }
  },
});
