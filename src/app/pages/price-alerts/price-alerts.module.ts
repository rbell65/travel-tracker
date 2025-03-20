import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PriceAlertsComponent } from './price-alerts.component';

@NgModule({
  declarations: [
  ],
  imports: [
    PriceAlertsComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PriceAlertsComponent }
    ])
  ]
})
export class PriceAlertsModule { } 