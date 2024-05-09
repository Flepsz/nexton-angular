import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
    data: {
      item: {},
    },
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
