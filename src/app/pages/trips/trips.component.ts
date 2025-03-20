import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="trips-container">
      <h1>My Trips</h1>
      <p>Plan and manage your travel itineraries</p>
      <a routerLink="/trips/new" class="create-button">
        Create New Trip
      </a>
    </div>
  `,
  styles: [`
    .trips-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
      font-size: 2rem;
    }

    p {
      color: #666;
      margin-bottom: 30px;
    }

    .create-button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
      transition: background-color 0.2s;
    }

    .create-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class TripsComponent {} 