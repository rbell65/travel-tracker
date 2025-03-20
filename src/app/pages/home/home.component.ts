import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripFormModalComponent } from '../../components/trip-form-modal/trip-form-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TripFormModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Travel Tracker';
  showTripModal = false;

  onOpenTripModal(): void {
    this.showTripModal = true;
  }

  onCloseTripModal(): void {
    this.showTripModal = false;
  }

  onSubmitTrip(tripData: any): void {
    console.log('New trip data:', tripData);
    // TODO: Implement trip creation
    this.showTripModal = false;
  }
} 