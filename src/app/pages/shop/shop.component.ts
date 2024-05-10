import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  search: string = 'Camisa Sufgang';

  _searchService = inject(SearchService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._searchService.search$.subscribe((search) => {
      this.search = search;
    });

    this.route.queryParams.subscribe((params) => {
      if (params['search']) {
        this.search = params['search'];
        this._searchService.setSearch(this.search);
      }
    });
  }
}
