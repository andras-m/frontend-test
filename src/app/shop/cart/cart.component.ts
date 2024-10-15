import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../shared/cart-item.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);
  cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  /**
  * Calculate the total price of the products
  * @return {number} Total price
  */
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
