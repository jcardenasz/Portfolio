import { Component } from '@angular/core';
import { Socials } from "../../components/molecules";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Socials],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  email = 'jucamiza28@gmail.com';
  subject = 'Portfolio Contact';
  body = "Hi Juan Camilo,\n\nI'd like to talk about...";

  get mailtoLink(): string {
    return `mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
  }
}