import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components';
import { Footer } from './components';
import { Button } from './components/atoms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';
}
