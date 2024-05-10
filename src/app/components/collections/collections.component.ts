import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { lucideArrowRight } from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-collections',
  standalone: true,
  providers: [provideIcons({ lucideArrowRight })],
  imports: [HlmIconComponent, CommonModule, RouterLink],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css',
})
export class CollectionsComponent {
  _router = inject(Router);

  navigateShop(search: string) {
    this._router.navigate(['/shop'], {
      queryParams: { search: search },
    });
  }

  collections = [
    {
      title: "For Men's",
      desc: 'Starting at $24',
      href: 'Roupa masculina',
    },
    {
      title: "For Women's",
      desc: 'Starting at $19',
      href: 'Roupa feminina',
    },
    {
      title: 'Accessories',
      desc: 'Explore accessories',
      href: 'acessório',
    },
  ];
}
