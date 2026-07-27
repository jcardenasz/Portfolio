import { Component } from '@angular/core';
import { Maintenance } from "../../components/molecules/maintenance/maintenance";
import { ProjectBlock } from "../../components/molecules/project-block/project-block";

@Component({
  selector: 'app-projects',
  imports: [ProjectBlock],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}