import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: Product, quantity: number }[] = [];

  /**
  * Add the products to the cart
  * @param {Product} product  The product object that we want to add to the cart
  * @param {number} quantity  The number of products that we want to add to the cart
  */
  addToCart(product: Product, quantity: number) {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
  }

  /**
  * Get the items of the cart
  */
  getCartItems() {
    return this.cart;
  }

  /**
  * Calculate the total price of the products
  * @return {number} Total price
  */
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}
