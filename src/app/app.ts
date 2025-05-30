import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Hero,
    About,
    Skills,
    Projects,
    Footer
  ],
  templateUrl: './app.html',
})
export class App {
  protected title = 'portfolio';
}
