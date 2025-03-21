import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-excursions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.scss']
})
export class ExcursionsComponent implements OnInit {
  searchForm: FormGroup;
  minDate: string;
  loading = false;
  searchResults: any[] = [];
  noResults = false;

  constructor(private fb: FormBuilder) {
    this.minDate = new Date().toISOString().split('T')[0];
    
    this.searchForm = this.fb.group({
      location: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      participants: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
      type: ['all'],
      duration: ['any'],
      priceRange: ['any'],
      features: [[]]
    });
  }

  ngOnInit(): void {
    // Set minimum date to today
    const today = new Date();
    this.searchForm.get('date')?.setValidators([
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
            name: 'City Walking Tour',
            type: 'Cultural',
            rating: 4.8,
            reviews: 256,
            price: 49.99,
            duration: '3 hours',
            location: 'Downtown',
            features: ['Guided Tour', 'Local Expert', 'Small Group', 'Hotel Pickup'],
            image: 'https://placehold.co/400x300',
            description: 'Explore the city\'s historic landmarks and hidden gems with our expert local guide'
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

  toggleFeature(feature: string): void {
    const features = this.searchForm.get('features')?.value || [];
    const index = features.indexOf(feature);
    
    if (index === -1) {
      features.push(feature);
    } else {
      features.splice(index, 1);
    }
    
    this.searchForm.patchValue({ features });
  }
} 