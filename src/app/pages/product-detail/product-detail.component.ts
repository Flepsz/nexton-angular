import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';
import { Result } from '../../interfaces/result';
import { lucideShoppingBag, lucideSparkles } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { CounterQuantityComponent } from '../../components/counter-quantity/counter-quantity.component';
import { HotToastService } from '@ngxpert/hot-toast';
import { CartService } from '../../services/cart/cart.service';
import { catchError, of } from 'rxjs';
import { ItemOrder } from '../../interfaces/item';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  providers: [provideIcons({ lucideSparkles, lucideShoppingBag })],
  imports: [CommonModule, HlmIconComponent, CounterQuantityComponent, HlmButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  id!: string | null;
  isLoading: boolean = false;
  item!: Result;
  details: string = '';
  thumbnail: string = '';
  quantity: number = 1;
  itemOrder!: ItemOrder;

  _productsService = inject(ProductsService);
  _cartService = inject(CartService);
  _toastService = inject(HotToastService);

  addToCart$ = this._cartService.useStore((state) => state.addToCart);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id !== null) {
      this.getDescription(this.id);

      this.item = history.state.item;

      if (!this.item) {
        this._productsService.getOneProduct(this.id).subscribe((data) => {
          this.item = data;
          this.isLoading = false;
        });
      }
    }
    if (this.item) {
      this.thumbnail = this.item.thumbnail.replace('-I.jpg', '-O.jpg');
    }
  }

  onQuantityChange(newQuantity: number) {
    this.quantity = newQuantity;
  }

  getDescription(id: string) {
    this.isLoading = true;
    this._productsService.getDesc(id).subscribe((data) => {
      this.details = data.plain_text;
      this.isLoading = false;
    });
  }

  handleAddToCart() {
    this.itemOrder = {
      id: this.item.id,
      title: this.item.title,
      thumbnail: this.thumbnail,
      price: this.item.price,
      quantity: this.quantity,
      totalPrice: this.item.price * this.quantity,
    };

    this.addToCart$
      .pipe(
        this._toastService.observe({
          loading: 'Adding to Cart...',
          success: 'Added to Cart!',
          error: (e) => 'Something did not work, reason: ' + e,
        }),
        catchError((error) => of(error))
      )
      .subscribe((addToCartFunction: (item: ItemOrder) => void) => {
        addToCartFunction(this.itemOrder);
      });
  }
}
