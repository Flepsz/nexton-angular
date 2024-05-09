import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { lucideShoppingBag, lucideSparkles } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { CounterQuantityComponent } from '../../components/counter-quantity/counter-quantity.component';
import { CommonModule } from '@angular/common';
import { Result } from '../../interfaces/result';
import { ItemOrder } from '../../interfaces/item';
import { HotToastService } from '@ngxpert/hot-toast';
import { catchError, of } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-content',
  standalone: true,
  providers: [provideIcons({ lucideSparkles, lucideShoppingBag })],
  imports: [
    CommonModule,
    HlmIconComponent,
    HlmSpinnerComponent,
    HlmButtonModule,
    CounterQuantityComponent,
  ],
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.css',
})
export class ProductContentComponent implements OnInit {
  id!: string | null;
  item!: Result;
  itemOrder!: ItemOrder;
  quantity: number = 1;
  details: string = '';
  thumbnail: string = '';
  isLoading: boolean = false;

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
      this.updateItemOrder();
    }
  }

  onQuantityChange(newQuantity: number) {
    this.quantity = newQuantity;
    this.updateItemOrder();

    console.log(this.quantity);
  }

  updateItemOrder() {
    this.itemOrder = {
      id: this.item.id,
      title: this.item.title,
      thumbnail: this.thumbnail,
      price: this.item.price,
      quantity: this.quantity,
      totalPrice: this.item.price * this.quantity,
    };
  }

  getDescription(id: string) {
    this.isLoading = true;
    this._productsService.getDesc(id).subscribe((data) => {
      this.details = data.plain_text;
      this.isLoading = false;

      console.log(data);
    });
  }

  handleAddToCart() {
    this.updateItemOrder();

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
