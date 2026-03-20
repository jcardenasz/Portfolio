import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-button',
  imports: [RouterLink, NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() redirect!: string;
  @Input() variant: 'primary' | 'secondary' | 'navbar' | 'footer' = 'primary';
}
