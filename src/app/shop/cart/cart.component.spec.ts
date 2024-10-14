import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from '../shared/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent]
    })
    .compileComponents();

    cartService = TestBed.inject(CartService);
    
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cartService.getTotalPrice()', () => {
    const cartSpy = spyOn(cartService, 'getTotalPrice').and.callThrough();
    component.getTotalPrice();
    expect(cartSpy).toHaveBeenCalled();
  });
});
