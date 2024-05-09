import { Component, Input } from '@angular/core';
import { lucideMinus, lucidePlus } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';

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

  get formattedQuantity(): string {
    return this.quantity < 10 ? `0${this.quantity}` : `${this.quantity}`;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increase() {
    this.quantity++;
  }
}
