import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuideMeta } from '../models/guide.model';

const GUIDES: GuideMeta[] = [
  {
    route: 'guia-corta-prompt-engineering',
    title: 'Guía Corta de Prompt Engineering',
    description: 'Una guía rápida para aprender a usar correctamente los prompts en desarrollo de software.',
    date: '2026-07-30',
    tags: ['prompt', 'engineering', 'AI'],
    fileName: 'guia-corta-prompt-engineering.md',
  },
  // add one entry per .md file you drop in public/guides/
];

@Injectable({ providedIn: 'root' })
export class GuidesService {
  private http = inject(HttpClient);

  getGuides(): GuideMeta[] {
    return GUIDES;
  }

  getGuideByRoute(route: string): GuideMeta | undefined {
    return GUIDES.find(g => g.route === route);
  }

  getGuideContent(fileName: string): Observable<string> {
    // no "assets/" prefix — public/ maps straight to the root
    return this.http.get(`guides/${fileName}`, { responseType: 'text' });
  }
}
