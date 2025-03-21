import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TripsComponent } from './pages/trips/trips.component';
import { PriceAlertsComponent } from './pages/price-alerts/price-alerts.component';
import { ExcursionsComponent } from './pages/excursions/excursions.component';
import { AiAssistantComponent } from './pages/ai-assistant/ai-assistant.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'price-alerts', component: PriceAlertsComponent },
  { path: 'excursions', component: ExcursionsComponent },
  { path: 'flights', loadComponent: () => import('./pages/flight-search/flight-search.component').then(m => m.FlightSearchComponent) },
  { path: 'accommodations', loadComponent: () => import('./pages/accommodations/accommodations.component').then(m => m.AccommodationsComponent) },
  { path: 'ai-assistant', component: AiAssistantComponent },
  { path: '**', redirectTo: '' }
];
