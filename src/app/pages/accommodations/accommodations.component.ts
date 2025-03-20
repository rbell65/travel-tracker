import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-accommodations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {
  searchForm: FormGroup;
  minDate: string;
  loading = false;
  searchResults: any[] = [];
  noResults = false;

  constructor(private fb: FormBuilder) {
    this.minDate = new Date().toISOString().split('T')[0];
    
    this.searchForm = this.fb.group({
      location: ['', [Validators.required, Validators.minLength(3)]],
      checkIn: ['', [Validators.required]],
      checkOut: ['', [Validators.required]],
      guests: [2, [Validators.required, Validators.min(1), Validators.max(10)]],
      rooms: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      type: ['hotel'],
      priceRange: ['any'],
      amenities: [[]]
    });
  }

  ngOnInit(): void {
    // Set minimum date for check-in to today
    const today = new Date();
    this.searchForm.get('checkIn')?.setValidators([
      Validators.required,
      Validators.min(today.getTime())
    ]);
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      this.loading = true;
      this.noResults = false;
      
      // Simulate API call
      setTimeout(() => {
        // TODO: Replace with actual API call
        this.searchResults = [
          {
            name: 'Grand Hotel',
            type: 'Hotel',
            rating: 4.5,
            reviews: 128,
            price: 199.99,
            location: 'Downtown',
            amenities: ['WiFi', 'Pool', 'Restaurant', 'Gym'],
            image: 'https://placehold.co/400x300',
            description: 'Luxury hotel in the heart of the city'
          }
        ];
        
        this.loading = false;
        this.noResults = this.searchResults.length === 0;
      }, 1500);
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.searchForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('minlength')) {
      return 'Please enter at least 3 characters';
    }
    if (control?.hasError('min')) {
      return 'Please select a valid date';
    }
    return '';
  }

  toggleAmenity(amenity: string): void {
    const amenities = this.searchForm.get('amenities')?.value || [];
    const index = amenities.indexOf(amenity);
    
    if (index === -1) {
      amenities.push(amenity);
    } else {
      amenities.splice(index, 1);
    }
    
    this.searchForm.patchValue({ amenities });
  }
} 