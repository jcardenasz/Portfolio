import { Component } from '@angular/core';
import { Hero, Description } from '../../components/organisms';
import { ToolsCarousel } from '../../components/molecules';

@Component({
  selector: 'app-home',
  imports: [Hero, Description, ToolsCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
