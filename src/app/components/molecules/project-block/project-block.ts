import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { projects } from './projectList';
     
  @Component({
    selector: 'app-project-block',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './project-block.html',
    styleUrls: ['./project-block.css']
  })
  export class ProjectBlock {
    projects = projects;
  }