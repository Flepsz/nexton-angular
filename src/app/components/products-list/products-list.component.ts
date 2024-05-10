import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products/products.service';
import { Result } from '../../interfaces/result';
import { switchMap, of } from 'rxjs';

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['search'] && !changes['search'].firstChange) {
      this.getProducts();
    }
  }

  getProducts() {
    this.isLoading = true;
    const searchTerm = this.search ? this.search : 'Relogio';
    this._productsService
      .getProducts(searchTerm)
      .pipe(
        switchMap((data) => {
          this.products = data.results;
          this.isLoading = false;
          return of(null); // Returning a dummy observable to complete the chain
        })
      )
      .subscribe();
  }
}
