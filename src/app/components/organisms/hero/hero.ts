import { Component, OnInit, signal } from '@angular/core';

type Mode = 'writing' | 'deleting' | 'waiting' | 'preWriting';

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
  mode = signal<Mode>('preWriting');

  text = [
    'My name is Juan Camilo Cardenas Zabala',
    'I am a Fullstack Software Developer living in Bogotá',
    'Let\'s forge great solutions together!',
  ];

  ngOnInit() {
    this.runTypewriter();
  }

  runTypewriter() {
    switch (this.mode()) {
      case 'preWriting':
        this.pauseBeforeWriting();
        break;
      case 'writing':
        this.startWriting();
        break;
      case 'deleting':
        this.deleteText();
        break;
      case 'waiting':
        this.wait();
        break;
    }
  }

  pauseBeforeWriting() {
    setTimeout(() => {
      this.charIndex.set(0);
      this.mode.set('writing');
      this.runTypewriter();
    }, 1400);
  }

  startWriting(sentence: string = this.text[this.sentenceIndex()]) {
    if (this.charIndex() <= sentence.length) {
      this.displayText.set(sentence.substring(0, this.charIndex()));
      this.charIndex.update(v => v + 1);
      setTimeout(() => this.startWriting(), 150);
    } else {
      this.mode.set('waiting');
      this.runTypewriter();
    }
  }

  deleteText(sentence: string = this.text[this.sentenceIndex()]) {
    if (this.charIndex() >= 0) {
      this.displayText.set(sentence.substring(0, this.charIndex()));
      this.charIndex.update(v => v - 1);
      setTimeout(() => this.deleteText(), 60);
    } else {
      this.sentenceIndex.update(v => (v + 1) % this.text.length);
      this.mode.set('preWriting');
      this.runTypewriter();
    }
  }

  wait() {
    setTimeout(() => {
      this.mode.set('deleting');
      this.runTypewriter();
    }, 2500);
  }
}
