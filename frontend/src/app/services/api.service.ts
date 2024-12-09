import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "http://localhost:3000/api/services";

  constructor(private http: HttpClient) {}

  getService(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getServiceById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateService(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
