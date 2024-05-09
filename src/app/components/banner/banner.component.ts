import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HlmButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input() search?: string;

  _router = inject(Router);

  goToShop() {
    this._router.navigate(['/shop'], { queryParams: { search: this.search } });
  }
}
