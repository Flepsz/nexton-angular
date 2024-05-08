import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { FooterColumnComponent } from '../footer-column/footer-column.component';

interface Footer {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogoComponent, FooterColumnComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerLinks: Footer[] = [
    {
      title: 'Getting started',
      links: ['Release Notes', 'Upgrade Guide', 'Browser Support', 'Dark Mode'],
    },
    {
      title: 'Explore',
      links: ['Prototyping', 'Design systems', 'Pricing', 'Security'],
    },
    {
      title: 'Community',
      links: [
        'Discussion Forums',
        'Code of Conduct',
        'Contributing',
        'API Reference',
      ],
    },
  ];

  paymentIcons: string[] = [
    'assets/pay-icons/visa.png',
    'assets/pay-icons/paypal.png',
    'assets/pay-icons/stripe.png',
    'assets/pay-icons/verisign.png',
  ];
}
