import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-form-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trip-form-modal.component.html',
  styleUrls: ['./trip-form-modal.component.scss']
})
export class TripFormModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  tripForm: FormGroup;
  minDate: string;

  constructor(private fb: FormBuilder) {
    // Set minimum date to today
    this.minDate = new Date().toISOString().split('T')[0];
    
    this.tripForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      destination: ['', [Validators.required, Validators.minLength(3)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.tripForm.valid) {
      this.submit.emit(this.tripForm.value);
    }
  }

  onClose(): void {
    this.close.emit();
  }

  getErrorMessage(controlName: string): string {
    const control = this.tripForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('minlength')) {
      return 'Please enter at least 3 characters';
    }
    return '';
  }
} 