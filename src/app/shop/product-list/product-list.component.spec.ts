import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { provideHttpClient } from '@angular/common/http';
import { Product } from '../shared/product.interface';
import { CartService } from '../shared/cart.service';
import { ProductService } from '../shared/product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let cartService: CartService;
  let productService: ProductService;
  let exampleProduct: Product = { 
    id: '1', 
    name: 'Red apples', 
    img: '', 
    availableAmount: 100, 
    minOrderAmount: 10, 
    price: 10.5 
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();
    
    cartService = TestBed.inject(CartService);
    productService = TestBed.inject(ProductService);

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the item to the cart and update amount', () => {
    const cartSpy = spyOn(cartService, 'addToCart').and.callThrough();
    const productSpy = spyOn(productService, 'updateProductAmount').and.callThrough();
    component.addToCart(exampleProduct, 10);

    expect(cartSpy).toHaveBeenCalledWith(exampleProduct, 10);
    expect(productSpy).toHaveBeenCalledWith(exampleProduct.id, 10);
  });

  it('should show the alert', () => {
    spyOn(window, 'alert');
    component.addToCart(exampleProduct, 7);
    expect(window.alert).toHaveBeenCalledWith('Invalid quantity selected');
  })

  it('should show the alert', () => {
    spyOn(window, 'alert');
    component.addToCart(exampleProduct, 200);
    expect(window.alert).toHaveBeenCalledWith('Invalid quantity selected');
  })
});
