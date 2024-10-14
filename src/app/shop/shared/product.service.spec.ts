import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Product } from './product.interface';
import { provideHttpClient } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://cas5-0-urlprotect.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2f63c10327716562671870f959.mockapi.io%2fproducts&umid=edab3d48-7a50-4ca6-b6c9-9362af456f60&auth=3bd1ed0ea25e030aebac2180cda48b2d7a1ccc30-bf53e959aa381ef3b79ace2237ee4d9545bb0e5b';

  const mockProducts: Product[] = [
    { id: '1', name: 'Red apples', img: 'img1.jpg', availableAmount: 100, minOrderAmount: 10, price: 10.5 },
    { id: '2', name: 'Bananas', img: 'img2.jpg', availableAmount: 150, minOrderAmount: 5, price: 1 }
  ];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cached products if already loaded', () => {
    service['products'] = mockProducts;

    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });
  });

  it('should fetch products from API if not cached', () => {
    service['products'] = [];

    service.getProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);

    expect(service['products']).toEqual(mockProducts);
  });

  it('should decrease available amount of the product', () => {
    service['products'] = [...mockProducts];

    service.updateProductAmount('1', 20);

    const updatedProduct = service['products'].find(p => p.id === '1');
    expect(updatedProduct!.availableAmount).toBe(80);
  });

  it('should not update the product if amount is greater than availableAmount', () => {
    service['products'] = [...mockProducts];

    service.updateProductAmount('1', 200);

    const updatedProduct = service['products'].find(p => p.id === '1');
    expect(updatedProduct!.availableAmount).toBe(100);
  });

  it('should not update any product if productId is not found', () => {
    service['products'] = [...mockProducts];

    service.updateProductAmount('999', 10);

    expect(service['products']).toEqual(mockProducts);
  });
});
