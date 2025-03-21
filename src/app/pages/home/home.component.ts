import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TripFormModalComponent } from '../../components/trip-form-modal/trip-form-modal.component';

interface Trip {
  id: number;
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbEvaIconsModule,
    TripFormModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Travel Tracker';
  showTripModal = false;
  recentTrips: Trip[] = [
    {
      id: 1,
      title: 'Paris Adventure',
      destination: 'Paris, France',
      startDate: new Date('2024-06-15'),
      endDate: new Date('2024-06-22'),
      image: 'assets/images/paris.jpg'
    },
    {
      id: 2,
      title: 'Tokyo Explorer',
      destination: 'Tokyo, Japan',
      startDate: new Date('2024-08-01'),
      endDate: new Date('2024-08-10'),
      image: 'assets/images/tokyo.jpg'
    }
  ];

  onOpenTripModal(): void {
    this.showTripModal = true;
  }

  onCloseTripModal(): void {
    this.showTripModal = false;
  }

  onSubmitTrip(tripData: any): void {
    console.log('New trip:', tripData);
    this.showTripModal = false;
  }

  onEditTrip(trip: Trip): void {
    console.log('Edit trip:', trip);
    // TODO: Implement trip editing functionality
  }
} 