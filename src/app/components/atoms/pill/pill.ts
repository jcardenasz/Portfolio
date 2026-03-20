import { Component, Input, signal } from '@angular/core';

export interface PillItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-pill',
  standalone: true,
  imports: [],
  templateUrl: './pill.html',
  styleUrl: './pill.css',
})
export class Pill {
  @Input() item!: PillItem;
  @Input() trigger: 'hover' = 'hover';

  isActive = signal(false);
show() {
    if (this.trigger === 'hover') {
      this.isActive.set(true);
    }
  }

  hide() {
    if (this.trigger === 'hover') {
      this.isActive.set(false);
    }
  }

}
