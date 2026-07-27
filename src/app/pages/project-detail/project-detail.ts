import { Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { projects } from '../../components/molecules/project-block/projectList';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);

  private routeParam = toSignal(
    this.route.paramMap.pipe(map(params => params.get('route'))),
    { initialValue: null }
  );

  project = computed(() =>
    projects.find(p => p.route === this.routeParam())
  );

  activeImage = signal(0);

  nextImage() {
    const total = this.project()?.images.length ?? 0;
    if (total === 0) return;
    this.activeImage.update(i => (i + 1) % total);
  }

  prevImage() {
    const total = this.project()?.images.length ?? 0;
    if (total === 0) return;
    this.activeImage.update(i => (i - 1 + total) % total);
  }

  setImage(i: number) {
    this.activeImage.set(i);
  }
}