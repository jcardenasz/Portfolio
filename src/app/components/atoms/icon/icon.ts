import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl:'./icon.css',
})
export class Icon {
  @Input() name: 'github' | 'linkedin' | 'instagram' | 'home' | 'logo'= 'home';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  get iconSrc(): string{
    return `icons/${this.name}.svg`;
  }
}
