import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuideMeta } from '../models/guide.model';
import { GUIDES } from '../services/guidesList';

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
