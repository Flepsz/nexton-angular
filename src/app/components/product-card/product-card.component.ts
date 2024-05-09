import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideShoppingBag } from '@ng-icons/lucide';
import { Result } from '../../interfaces/result';
import { ProductsService } from '../../services/products/products.service';
import { TruncatePipe } from '../../utils/truncate.pipe';
import { CartService } from '../../services/cart/cart.service';
import { ItemOrder } from '../../interfaces/item';
import { HotToastService } from '@ngxpert/hot-toast';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-card',
  standalone: true,
  providers: [provideIcons({ lucideShoppingBag })],
  imports: [HlmIconComponent, CommonModule, RouterLink, TruncatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  @Input() item!: Result;
  category: string = '';
  thumbnail: string = '';
  itemOrder!: ItemOrder;

  _produtsService = inject(ProductsService);
  _cartService = inject(CartService);
  _router = inject(Router);
  _toastService = inject(HotToastService);

  addToCart$ = this._cartService.useStore((state) => state.addToCart);
  order$ = this._cartService.useStore((state) => state.order);

  ngOnInit() {
    if (this.item) {
      this.thumbnail = this.item.thumbnail.replace('-I.jpg', '-O.jpg');
      this.getCategory();
    }
  }

  goToDetails() {
    this._router.navigate([`/details/${this.item.id}`], {
      state: {
        item: this.item,
      },
    });
  }

  handleAddToCart() {
    this.itemOrder = {
      id: this.item.id,
      title: this.item.title,
      thumbnail: this.thumbnail,
      price: this.item.price,
      quantity: 1,
      totalPrice: this.item.price,
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

  getCategory() {
    this._produtsService
      .getCategory(this.item.category_id)
      .subscribe((data) => {
        this.category = data.name;
      });
  }
}
