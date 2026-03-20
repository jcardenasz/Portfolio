import { Component } from '@angular/core';
import { Hero, Description } from '../../components/organisms/index';


@Component({
  selector: 'app-home',
  imports: [Hero, Description],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
