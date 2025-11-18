import { Component, signal } from '@angular/core';
import { Menu } from './navegacao/menu/menu';
import { Home } from './navegacao/home/home';
import { Footer } from './navegacao/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Menu, Home, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MinhaAppAngular');
}
