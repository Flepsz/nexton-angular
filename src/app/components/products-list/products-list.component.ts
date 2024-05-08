import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products/products.service';
import { Result } from '../../interfaces/result';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  products!: Result[];

  _produtsService = inject(ProductsService);

  ngOnInit() {
    this.getproducts();
  }

  getproducts() {
    this._produtsService.getProducts('Relogio').subscribe((data) => {
      this.products = data.results;
      console.log(data);
    });
  }
}
