import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { OrderCardComponent } from '../order-card/order-card.component';
import { CommonModule } from '@angular/common';
import { ItemOrder } from '../../interfaces/item';

@Component({
  selector: 'app-order-items',
  standalone: true,
  imports: [OrderCardComponent, CommonModule],
  templateUrl: './order-items.component.html',
  styleUrl: './order-items.component.css',
})
export class OrderItemsComponent implements OnInit {
  orderItems!: ItemOrder[];

  _cartService = inject(CartService);

  order$ = this._cartService.useStore((state) => state.order);

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.order$.subscribe((data) => {
      this.orderItems = data;
    });
  }
}
