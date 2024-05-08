import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  collections = [
    {
      title: "For Men's",
      desc: 'Starting at $24',
      href: '/products?search=men',
    },
    {
      title: "For Women's",
      desc: 'Starting at $19',
      href: '/products?search=women',
    },
    {
      title: 'Accessories',
      desc: 'Explore accessories',
      href: '/products?search=accessories',
    },
  ];
}
