import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import("./shop/product-list/product-list.component").then((m) => m.ProductListComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import("./shop/cart/cart.component").then((m) => m.CartComponent),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**', 
    redirectTo: 'products'
  }
];
