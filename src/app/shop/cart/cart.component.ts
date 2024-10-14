import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CommonModule } from '@angular/common';
import { Cart } from '../shared/cart.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);
  cartItems: Cart[] = [];

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
