import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { CartBtnComponent } from '../cart-btn/cart-btn.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ThemeSwitcherComponent,
    RouterLink,
    LogoComponent,
    CartBtnComponent,
    SearchbarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
