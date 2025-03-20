import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  searchForm: FormGroup;
  minDate: string;
  loading = false;
  searchResults: any[] = [];
  noResults = false;

  constructor(private fb: FormBuilder) {
    this.minDate = new Date().toISOString().split('T')[0];
    
    this.searchForm = this.fb.group({
      origin: ['', [Validators.required, Validators.minLength(3)]],
      destination: ['', [Validators.required, Validators.minLength(3)]],
      departureDate: ['', [Validators.required]],
      returnDate: [''],
      passengers: [1, [Validators.required, Validators.min(1), Validators.max(9)]],
      class: ['economy']
    });
  }

  ngOnInit(): void {
    // Set minimum date for departure date to today
    const today = new Date();
    this.searchForm.get('departureDate')?.setValidators([
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
            airline: 'Sample Airlines',
            flightNumber: 'SA123',
            departure: '10:00 AM',
            arrival: '12:00 PM',
            price: 299.99,
            stops: 0
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
} 