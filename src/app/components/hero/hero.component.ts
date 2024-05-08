import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideSearch } from '@ng-icons/lucide';
import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent,
} from '@spartan-ng/ui-carousel-helm';

@Component({
  selector: 'hero',
  standalone: true,
  providers: [provideIcons({ lucideSearch })],
  imports: [
    HlmButtonModule,
    HlmIconComponent,
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
    CommonModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  images: string[] = [
    'assets/hero/hero.png',
    'assets/hero/hero2.png',
    'assets/hero/hero3.png',
  ];
}
