import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductContentComponent } from '../../components/product-content/product-content.component';
import { ProductsCarouselComponent } from '../../components/products-carousel/products-carousel.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductContentComponent, ProductsCarouselComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {}
