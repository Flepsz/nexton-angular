import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  search: string = 'Camisa Sufgang';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['search']) {
        this.search = params['search'];
      }
    });
  }
}
