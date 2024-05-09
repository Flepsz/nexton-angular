import { Component, inject } from '@angular/core';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent,
} from '@spartan-ng/ui-carousel-helm';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Result } from '../../interfaces/result';
import { ProductsService } from '../../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-carousel',
  standalone: true,
  imports: [
    CommonModule,
    HlmButtonModule,
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
    ProductCardComponent,
  ],
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.css',
})
export class ProductsCarouselComponent {
  products!: Result[];
  isLoading: boolean = false;

  _productsService = inject(ProductsService);

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this._productsService.getProducts('Relogio').subscribe((data) => {
      this.products = data.results;
      this.isLoading = false;
    });
  }
}
