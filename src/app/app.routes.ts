import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'trips',
    loadComponent: () => import('./pages/trips/trips.component').then(m => m.TripsComponent)
  },
  {
    path: 'price-alerts',
    loadComponent: () => import('./pages/price-alerts/price-alerts.component').then(m => m.PriceAlertsComponent)
  },
  {
    path: 'flights',
    loadComponent: () => import('./pages/flight-search/flight-search.component').then(m => m.FlightSearchComponent)
  },
  {
    path: 'accommodations',
    loadComponent: () => import('./pages/accommodations/accommodations.component').then(m => m.AccommodationsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
