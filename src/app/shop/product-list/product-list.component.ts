import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../shared/product.interface';
import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';
import { AsyncPipe, CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe, NgOptimizedImage],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  products: Observable<Product[]> = of([]);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  /**
  * Add a product to the cart.
  * If the product quantity is valid, it will add the item and update the available amount as well. 
  * Otherwise it shows an alert dialog
  * @param {Product} product The product object that we want to add to the cart
  * @param {number} quantity The number of products that we want to add to the cart
  */
  addToCart(product: Product, quantity: number) {
    if (quantity >= product.minOrderAmount && quantity <= product.availableAmount) {
      this.cartService.addToCart(product, quantity);
      this.productService.updateProductAmount(product.id, quantity);
    } else {
      alert('Invalid quantity selected');
    }
  }
}
