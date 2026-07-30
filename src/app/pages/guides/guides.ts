import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuidesService } from '../../services/guides.service';
import { GuideMeta } from '../../models/guide.model';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './guides.html',
  styleUrl: './guides.css',
})
export class Guides {
  private guidesService = inject(GuidesService);
  guides: GuideMeta[] = this.guidesService.getGuides();
}
