import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Menu } from './navegacao/menu/menu';
import { Footer } from './navegacao/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MinhaAppAngular');
}
