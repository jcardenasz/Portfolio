import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { GuidesService } from '../../services/guides.service';
import { GuideMeta } from '../../models/guide.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guide-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './guide-detail.html',
  styleUrl: './guide-detail.css',
  encapsulation: ViewEncapsulation.None
})
export class GuideDetail {
  private route = inject(ActivatedRoute);
  private guidesService = inject(GuidesService);
  private sanitizer = inject(DomSanitizer);

  guide = signal<GuideMeta | undefined>(undefined);
  content = signal<SafeHtml>('');

  constructor() {
    const routeParam = this.route.snapshot.paramMap.get('route');
    if (!routeParam) return;

    const guide = this.guidesService.getGuideByRoute(routeParam);
    this.guide.set(guide);

    if (guide) {
      this.guidesService.getGuideContent(guide.fileName).subscribe(md => {
        const html = marked.parse(md, { async: false }) as string;
        this.content.set(this.sanitizer.bypassSecurityTrustHtml(html));
      });
    }
  }
}
