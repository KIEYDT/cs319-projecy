import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingService } from '../services/booking.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  imports: [CommonModule],
})



export class HistoryComponent implements OnInit {
  // โค้ดแสดงข้อมูลประวัติการจอง

  bookings: any[] = [];
  service: any = {};
  userId: string = '';

  constructor(private router: Router, private bookingService: BookingService, private authService: AuthService, private apiService: ApiService) {}

  goToMenu(): void {
    this.router.navigate(['/menu']);
  }

  loadBookings(userId: string): void {
    this.bookingService.getBooking(userId).subscribe(
      (response) => {
        this.bookings = response.book;
        console.log(this.bookings[0])
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }

  fetchServices(serviceId: any): void {
    this.apiService.getServiceById(serviceId).subscribe(
      response => {
        this.service = response.service;
      }
    )
  }

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      const profile = this.authService.getProfile(token);
      profile.subscribe(
        (response: any) => {
          this.userId = response.user._id;
          this.loadBookings(this.userId);
        },
        (error) => console.error('Error fetching profile:', error)
      );
    }
  }
}