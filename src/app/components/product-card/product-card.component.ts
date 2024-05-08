import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HlmIconComponent } from '../../../../libs/ui/ui-icon-helm/src/lib/hlm-icon.component';
import { provideIcons } from '@ng-icons/core';
import { lucideShoppingBag } from '@ng-icons/lucide';
import { Result } from '../../interfaces/result';
import { ProductsService } from '../../services/products/products.service';
import { TruncatePipe } from '../../utils/truncate.pipe';

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

  _produtsService = inject(ProductsService);

  ngOnInit() {
    if (this.item) {
      this.thumbnail = this.item.thumbnail.replace('-I.jpg', '-O.jpg');
      this.getCategory();
    }
  }

  getCategory() {
    this._produtsService
      .getCategory(this.item.category_id)
      .subscribe((data) => {
        this.category = data.name;
      });
  }
}
