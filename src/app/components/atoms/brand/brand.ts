import { Component, Input } from '@angular/core';
import { brands } from './brandList';

@Component({
  selector: 'app-brand',
  imports: [],
  templateUrl: './brand.html',
  styleUrl: './brand.css',
})
export class Brand {
  @Input() Name: string = '';
  @Input() Image: string = '';
}
