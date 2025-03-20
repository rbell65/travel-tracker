import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 64px);
      background-color: #f8f9fa;
    }
  `],
  standalone: true,
  imports: [RouterOutlet, NavComponent]
})
export class AppComponent {
  title = 'Travel Tracker';
}
