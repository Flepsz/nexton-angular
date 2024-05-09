import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { lucideShoppingCart } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { CartService } from '../../services/cart/cart.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-btn',
  standalone: true,
  providers: [provideIcons({ lucideShoppingCart })],
  imports: [HlmIconComponent, CommonModule, RouterLink],
  templateUrl: './cart-btn.component.html',
  styleUrl: './cart-btn.component.css',
})
export class CartBtnComponent implements OnInit, OnDestroy {
  numberItems: number = 0;
  orderSubscription: Subscription | undefined;

  _cartService = inject(CartService);

  order$ = this._cartService.useStore((state) => state.order);

  ngOnInit(): void {
    this.orderSubscription = this._cartService
      .useStore((state) => state.order)
      .subscribe((order) => {
        this.numberItems = order.length;
      });
  }

  ngOnDestroy(): void {
    if (this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }
  }
}
