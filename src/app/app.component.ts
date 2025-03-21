import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { NbMenuModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NbLayoutModule,
    NbMenuModule,
    NbIconModule,
    NbEvaIconsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/'
    },
    {
      title: 'Trips',
      icon: 'map-outline',
      link: '/trips'
    },
    {
      title: 'Flights',
      icon: 'plane-outline',
      link: '/flights'
    },
    {
      title: 'Accommodations',
      icon: 'home-outline',
      link: '/accommodations'
    },
    {
      title: 'Excursions',
      icon: 'compass-outline',
      link: '/excursions'
    },
    {
      title: 'AI Assistant',
      icon: 'robot-outline',
      link: '/ai-assistant'
    }
  ];
}
