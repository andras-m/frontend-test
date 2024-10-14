import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from './product.interface';

describe('CartService', () => {
  let service: CartService;
  let exampleProduct: Product = { 
    id: '1', 
    name: 'Red apples', 
    img: '', 
    availableAmount: 100, 
    minOrderAmount: 10, 
    price: 10.5 
  };
  let exampleProduct2: Product = { 
    id: '2', 
    name: 'Green apples', 
    img: '', 
    availableAmount: 100, 
    minOrderAmount: 10, 
    price: 10.5 
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add products to the cart', () => {
    service.addToCart(exampleProduct, 10);
    expect(service.getCartItems().length).toBe(1);
    service.addToCart(exampleProduct, 10);
    expect(service.getCartItems().length).toBe(1);
    service.addToCart(exampleProduct2, 10);
    expect(service.getCartItems().length).toBe(2);
  });

  it('should calculate total price correctly', () => {
    service.addToCart(exampleProduct, 10);
    expect(service.getTotalPrice()).toBe(105);
  });
});
