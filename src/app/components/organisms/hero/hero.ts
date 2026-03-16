import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {

  sentenceIndex = signal(0);
  charIndex = signal(0);
  displayText = signal('');
  showCursor = false;

  text = [
    'My name is Juan Camilo Cardenas Zabala',
    'I am a Fullstack Software Developer',
    "let's forge great things together!",
  ];

  ngOnInit() {
    this.startWriting();
  }

  startWriting() {
    const sentence = this.text[this.sentenceIndex()];

    if( this.charIndex() <= sentence.length) {
      this.displayText.set(this.text[this.sentenceIndex()].substring(0, this.charIndex()));
      this.charIndex.update((value) => value + 1);
      setTimeout(() => this.startWriting(), 300);
      console.log(this.displayText());
    }
  }
}
