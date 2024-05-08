import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  lucideBoxes,
  lucideCoins,
  lucideGlobe,
  lucideTruck,
} from '@ng-icons/lucide';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-brand-info',
  standalone: true,
  providers: [
    provideIcons({ lucideTruck, lucideBoxes, lucideGlobe, lucideCoins }),
  ],
  imports: [HlmIconComponent, CommonModule],
  templateUrl: './brand-info.component.html',
  styleUrl: './brand-info.component.css',
})
export class BrandInfoComponent {
  infos = [
    {
      icon: 'lucideTruck',
      title: 'Free shipping',
      desc: 'On orders over $50.00',
    },
    {
      icon: 'lucideBoxes',
      title: 'Very easy to return',
      desc: 'Just phone number',
    },
    {
      icon: 'lucideGlobe',
      title: 'Worldwide delivery',
      desc: 'Fast delivery worldwide',
    },
    {
      icon: 'lucideCoins',
      title: 'Refunds policy',
      desc: '60 days return for any reason',
    },
  ];
}
