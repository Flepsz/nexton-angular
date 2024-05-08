import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-column.component.html',
  styleUrl: './footer-column.component.css',
})
export class FooterColumnComponent {
  @Input() title!: string;
  @Input() links!: string[];
}
