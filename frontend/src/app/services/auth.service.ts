import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:3000/api/auth";

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token); // Save token
        }
      })
    );
  }

  getProfile(token: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getToken(): string | null {
    return localStorage.getItem("authToken");
  }
}
