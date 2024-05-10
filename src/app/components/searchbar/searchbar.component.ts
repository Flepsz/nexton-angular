import { Component, inject } from '@angular/core';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideSearch } from '@ng-icons/lucide';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  providers: [provideIcons({ lucideSearch })],
  imports: [
    HlmInputModule,
    HlmButtonModule,
    HlmIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  _fb = inject(FormBuilder);
  _router = inject(Router);
  _searchService = inject(SearchService);

  searchForm = this._fb.group({
    search: ['', Validators.required],
  });

  onEnter() {
    this.onSubmit();
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const searchValue = this.searchForm.controls.search.value!;
      this._searchService.setSearch(searchValue);
      
      this._router.navigate(['/shop'], {
        queryParams: { search: this.searchForm.controls.search.value! },
      });
    }
    this.searchForm.markAllAsTouched();
  }
}
