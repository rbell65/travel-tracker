import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-price-alerts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="price-alerts-container">
      <h1>Price Alerts</h1>
      <p>Get notified when prices change for your travel plans</p>
      <a routerLink="/price-alerts/new" class="create-button">
        Create New Alert
      </a>
    </div>
  `,
  styles: [`
    .price-alerts-container {
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
export class PriceAlertsComponent {} 