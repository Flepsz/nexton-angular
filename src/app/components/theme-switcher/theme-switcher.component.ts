import { Component, inject } from '@angular/core';
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { ThemeService } from '@libs/theme-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'theme-switcher',
  standalone: true,
  imports: [HlmSwitchComponent, HlmLabelDirective],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent {
  private _themeService = inject(ThemeService);

  public theme$ = this._themeService.theme$;
  public isDarkMode: boolean = false;
  private themeSubscription: Subscription;

  constructor() {
    this.themeSubscription = this.theme$.subscribe((theme) => {
      this.isDarkMode = theme === 'dark';
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  public toggleTheme(): void {
    this._themeService.toggleDarkMode();
  }
}
