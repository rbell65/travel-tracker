import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripsComponent } from './trips.component';

@NgModule({
  declarations: [
  ],
  imports: [
    TripsComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TripsComponent }
    ])
  ]
})
export class TripsModule { } 