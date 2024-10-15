import { inject, Injectable } from '@angular/core';
import { Product } from '../shared/product.interface';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private products: Product[] = [];

  /**
  * Get the products from the server, or use the existing products array if it is not empty
  * @return {Observable<Product[]>} Array of the products as an Observable
  */
  getProducts(): Observable<Product[]> {
    if (this.products.length > 0) {
      return of(this.products);
    } else {
      const apiUrl = 'https://cas5-0-urlprotect.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2f63c10327716562671870f959.mockapi.io%2fproducts&umid=edab3d48-7a50-4ca6-b6c9-9362af456f60&auth=3bd1ed0ea25e030aebac2180cda48b2d7a1ccc30-bf53e959aa381ef3b79ace2237ee4d9545bb0e5b';
      return this.http.get<Product[]>(apiUrl).pipe(
        tap((products) => this.products = products)
      );
    }
  }

  /**
   * Update the amount of available products
  * @param {string} productId  The id of the product
  * @param {number} amount  The amount of the product
  */
  updateProductAmount(productId: string, amount: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product && product.availableAmount >= amount) {
      product.availableAmount -= amount;
    }
  }
}
