import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings: {
    name: string;
    email: string;
    tourDate: string;
    numberOfPeople: number;
    message: string;
  }[] = [];

  addBooking(booking: {
    name: string;
    email: string;
    tourDate: string;
    numberOfPeople: number;
    message: string;
  }): void {
    this.bookings.push(booking);
  }

  getBookings(): {
    name: string;
    email: string;
    tourDate: string;
    numberOfPeople: number;
    message: string;
  }[] {
    return this.bookings;
  }
}
