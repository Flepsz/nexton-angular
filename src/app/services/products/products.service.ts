import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Category,
  ProductDescription,
  ProductsSearch,
  Result,
} from '../../interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  con = 'https://api.mercadolibre.com/';

  getProducts(search: string) {
    return this.http.get<ProductsSearch>(
      this.con + `sites/MLB/search?q=${search}`
    );
  }

  getOneProduct(id: string) {
    return this.http.get<Result>(
      this.con + `items/${id}`
    );
  }

  getDesc(itemId: string) {
    return this.http.get<ProductDescription>(
      this.con + `items/${itemId}/description`
    );
  }

  getCategory(categId: string) {
    return this.http.get<Category>(this.con + `categories/${categId}`);
  }
}
