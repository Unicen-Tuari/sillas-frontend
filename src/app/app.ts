import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Logo } from './logo/logo';
import { Footer } from './footer/footer';
import { Sillas } from './sillas/sillas';

@Component({
  imports: [RouterOutlet, Header, Menu, Logo, Footer, Sillas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sillas-frontend');
}
