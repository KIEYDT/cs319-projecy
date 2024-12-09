import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl: string = "http://localhost:3000/api/bookings";

  constructor(private http: HttpClient) { }

  createBooking(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, data);
  }

  getBooking(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateBooking(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
