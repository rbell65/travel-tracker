import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TripFormModalComponent } from '../../components/trip-form-modal/trip-form-modal.component';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    TripFormModalComponent
  ],
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  trips: any[] = [];
  showTripModal = false;
  selectedTrip: any = null;

  constructor() {}

  ngOnInit(): void {
    // TODO: Load trips from service
    this.trips = [];
  }

  onOpenTripModal(): void {
    this.selectedTrip = null;
    this.showTripModal = true;
  }

  onCloseTripModal(): void {
    this.showTripModal = false;
    this.selectedTrip = null;
  }

  onSubmitTrip(tripData: any): void {
    // TODO: Save trip to service
    console.log('Trip submitted:', tripData);
    this.onCloseTripModal();
  }

  onEditTrip(trip: any): void {
    this.selectedTrip = trip;
    this.showTripModal = true;
  }

  onDeleteTrip(trip: any): void {
    // TODO: Delete trip from service
    console.log('Delete trip:', trip);
  }
} 