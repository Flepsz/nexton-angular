import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products/products.service';
import { Result } from '../../interfaces/result';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, HlmSpinnerComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  @Input() search?: string;

  products!: Result[];
  isLoading: boolean = false;

  _productsService = inject(ProductsService);

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this._productsService
      .getProducts(this.search ? this.search : 'Relogio')
      .subscribe((data) => {
        this.products = data.results;
        this.isLoading = false;
      });
  }
}
