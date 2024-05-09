import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-bicolor',
  standalone: true,
  imports: [],
  templateUrl: './title-bicolor.component.html',
  styleUrl: './title-bicolor.component.css',
})
export class TitleBicolorComponent {
  @Input() first!: string;
  @Input() second!: string;
}
