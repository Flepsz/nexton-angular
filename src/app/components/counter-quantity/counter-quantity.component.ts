import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-counter-quantity',
  standalone: true,
  providers: [provideIcons({ lucideMinus, lucidePlus })],
  imports: [HlmIconComponent],
  templateUrl: './counter-quantity.component.html',
  styleUrl: './counter-quantity.component.css',
})
export class CounterQuantityComponent {
  @Input() quantity: number = 0;
  @Input() cart: boolean = false;
  @Input() id!: string;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  _cartService = inject(CartService);

  decreaseStore$ = this._cartService.useStore(
    (state) => state.decreaseQuantity
  );
  increaseStore$ = this._cartService.useStore(
    (state) => state.increaseQuantity
  );

  get formattedQuantity(): string {
    return this.quantity < 10 ? `0${this.quantity}` : `${this.quantity}`;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
      if (this.id !== undefined && this.cart) {
        this.decreaseStore$.subscribe(
          (decrease: (itemId: string) => void) => {
            decrease(this.id);
          }
        );
      }

      this.emitChange();
    }
  }

  increase() {
    this.quantity++;
    if (this.id !== undefined && this.cart) {
      this.increaseStore$.subscribe(
        (increate: (itemId: string) => void) => {
          increate(this.id);
        }
      );
    }

    this.emitChange();
  }

  private emitChange() {
    this.change.emit(this.quantity);
  }
}
