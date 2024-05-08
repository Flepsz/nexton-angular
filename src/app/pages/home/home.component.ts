import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { BrandInfoComponent } from '../../components/brand-info/brand-info.component';
import { CollectionsComponent } from '../../components/collections/collections.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BrandInfoComponent, CollectionsComponent, ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
