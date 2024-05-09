import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { OrderItemsComponent } from '../../components/order-items/order-items.component';
import { TitleBicolorComponent } from '../../components/title-bicolor/title-bicolor.component';
import { CartService } from '../../services/cart/cart.service';
import { catchError, of, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { ItemOrder } from '../../interfaces/item';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    OrderItemsComponent,
    TitleBicolorComponent,
    CommonModule,
    HlmButtonModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, OnDestroy {
  subTotalPriceSum: number = 0;
  totalPriceSum: number = 0;
  totalSubscription: Subscription | undefined;
  orderItems!: ItemOrder[];
  finalOrder: any;

  _cartService = inject(CartService);
  _toastService = inject(HotToastService);

  order$ = this._cartService.useStore((state) => state.order);
  resetOrder$ = this._cartService.useStore((state) => state.resetOrder);

  ngOnInit(): void {
    this.totalSubscription = this.order$.subscribe((order) => {
      this.subTotalPriceSum = order.reduce((accumulator, currentOrder) => {
        return accumulator + currentOrder.totalPrice;
      }, 0);

      this.totalPriceSum = this.subTotalPriceSum + 5 + 24.9;

      this.orderItems = order;
    });
  }

  ngOnDestroy(): void {
    if (this.totalSubscription) {
      this.totalSubscription.unsubscribe();
    }
  }

  handleResetOrder() {
    this.resetOrder$
      .pipe(
        this._toastService.observe({
          loading: 'Placing order...',
          success: 'Ordered!',
          error: (e) => 'Something did not work, reason: ' + e,
        }),
        catchError((error) => of(error))
      )
      .subscribe((resetCartFunction: () => void) => {
        this.finalOrder = {
          items: this.orderItems,
          shipping: 5,
          tax: 24.9,
          totalPrice: this.totalPriceSum,
        };
        console.log(this.finalOrder);

        resetCartFunction();
      });
  }
}
