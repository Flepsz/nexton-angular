import { Component } from '@angular/core';
import { OrderItemsComponent } from '../../components/order-items/order-items.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [OrderItemsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
