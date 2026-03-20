import { Component } from '@angular/core';
import { Pill } from '../../atoms';
import type { PillItem } from '../../atoms';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [Pill],
  templateUrl: './values.html',
  styleUrl: './values.css',
})
export class Values {
  values: PillItem[] = [
    {
      title: 'Pragmatism',
      description:
        'I focus on logic and simplicity to build solutions that are straightforward to understand, maintain, and scale.',
    },
    {
      title: 'Solution-Driven',
      description:
        'I keep the goal in sight from start to finish, making deliberate decisions that drive toward the right outcome.',
    },
    {
      title: 'Honesty',
      description:
        'Transparency and sincerity are the foundation of trust in human relationships and the baseline of any creative process.',
    },
    {
      title: 'Frankness',
      description:
        'Clear, candid communication saves time and prevents misunderstandings whether the message is easy to hear or not.',
    },
    {
      title: 'Team Player',
      description:
        'The best solutions come from collaboration: sharing knowledge, challenging ideas objectively, and thriving together.',
    },
  ];

}
