import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { BrandInfoComponent } from '../../components/brand-info/brand-info.component';
import { CollectionsComponent } from '../../components/collections/collections.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { TitleBicolorComponent } from '../../components/title-bicolor/title-bicolor.component';
import { ProductsCarouselComponent } from '../../components/products-carousel/products-carousel.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    BrandInfoComponent,
    CollectionsComponent,
    ProductsCarouselComponent,
    TitleBicolorComponent,
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
