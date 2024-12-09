import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-booking',
  standalone: true,

  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class BookingComponent {
  bookingForm!: FormGroup;
  bookings: any[] = []; // array เก็บข้อมูลการจองทั้งหมด
  service: any = {};
  user: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookingService: BookingService,
    private authService: AuthService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    let serviceId;

    if (!token) {
      this.router.navigate(["/login"]);
      return;
    }

    this.authService.getProfile(token).subscribe(
      response => {
        this.user = response.user;
        this.bookingForm = this.fb.group({
          name: [{ value: this.user.name, disabled: true }, [Validators.required]],
          email: [this.user.email, [Validators.required, Validators.email]],
          bookingDate: ['', [Validators.required]],
          total: [1, [Validators.required, Validators.min(1)]],
          info: [''],
        });
      }
    )
    
    this.route.paramMap.subscribe(
      params => {
        serviceId = params.get("serviceId")!;
      }
    )

    this.fetchServices(serviceId);
  }

  fetchServices(serviceId: any): void {
    this.apiService.getServiceById(serviceId).subscribe(
      response => {
        this.service = response.service;
      }
    )
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const bookingDetails = { userId: this.user._id, serviceId: this.service._id, bookingDate: this.bookingForm.value.bookingDate, total: this.bookingForm.value.total, info: this.bookingForm.value.info }; // ดึงข้อมูลจากฟอร์ม
      console.log(bookingDetails);
      this.bookingService.createBooking(bookingDetails).subscribe(
        response => {
          this.router.navigate(["/menu"]);
        }
      )
    } else {
      alert('Please fill in all required fields.');
    }
  }

  goToMenu(): void {
    this.router.navigate(['/menu']);
  }
}
