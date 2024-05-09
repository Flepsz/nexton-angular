import { Component, inject, Input } from '@angular/core';
import { ItemOrder } from '../../interfaces/item';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideSparkles, lucideTrash } from '@ng-icons/lucide';
import { CounterQuantityComponent } from '../counter-quantity/counter-quantity.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { HotToastService } from '@ngxpert/hot-toast';
import { catchError, of } from 'rxjs';
import { TruncatePipe } from '../../utils/truncate.pipe';

@Component({
  selector: 'app-order-card',
  standalone: true,
  providers: [provideIcons({ lucideTrash, lucideSparkles })],
  imports: [
    HlmIconComponent,
    CommonModule,
    CounterQuantityComponent,
    TruncatePipe,
  ],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input() item!: ItemOrder;

  _cartService = inject(CartService);
  _toastService = inject(HotToastService);

  removeItem$ = this._cartService.useStore((state) => state.removeFromCart);

  onQuantityChange(newQuantity: number) {
    this.item.quantity = newQuantity;
  }

  handleRemoveFromCart() {
    this.removeItem$
      .pipe(
        this._toastService.observe({
          loading: 'Removing from Cart...',
          success: 'Removed from Cart!',
          error: (e) => 'Something did not work, reason: ' + e,
        }),
        catchError((error) => of(error))
      )
      .subscribe((removeFromCart: (itemId: string) => void) => {
        removeFromCart(this.item.id);
      });
  }
}
