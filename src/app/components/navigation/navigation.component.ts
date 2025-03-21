import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbMenuModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NbMenuModule,
    NbIconModule,
    NbEvaIconsModule,
    NbLayoutModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuItems = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/'
    },
    {
      title: 'My Trips',
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
      title: 'Price Alerts',
      icon: 'bell-outline',
      link: '/price-alerts'
    },
    {
      title: 'AI Assistant',
      icon: 'robot-outline',
      link: '/ai-assistant'
    }
  ];
} 