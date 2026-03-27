import { Component } from '@angular/core';
import { brands } from '../../atoms/brand/brandList';
import { Brand } from '../../atoms';

@Component({
  selector: 'app-tools-carousel',
  standalone: true,
  imports: [Brand],
  templateUrl: './tools-carousel.html',
  styleUrl: './tools-carousel.css',
})

export class ToolsCarousel {
  brands = brands;
  duplicatedBrands = [...this.brands, ...this.brands];
}
