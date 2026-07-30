import { RenderMode, ServerRoute } from '@angular/ssr';
import { GuidesService } from './services/guides.service';
import { inject } from '@angular/core';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:route',
    renderMode: RenderMode.Server,
  },
  {
    path: 'guides/:route',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const guidesService = inject(GuidesService);
      const guides = guidesService.getGuides();
      return guides.map(guide => ({ route: guide.route }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
