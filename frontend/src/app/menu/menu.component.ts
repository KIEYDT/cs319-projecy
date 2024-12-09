import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [CommonModule]
})
// oninit implement edit
export class MenuComponent implements OnInit {
  services: any[] = [];
  
  constructor(private router: Router, private apiService: ApiService, private authService: AuthService) {}
  goToBooking(serviceId: any): void {
    this.router.navigate(['/booking', serviceId]);
  }
  
  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.apiService.getService().subscribe(
      (data) => {
        // debug
        console.log("fetched ", data);
        this.services = data.service;
      },
      (error) => {
        console.log("error ", error);
      }
    );
  }

  getProfile(): void {
    const token = this.authService.getToken();
    if (!token) {
      return;
    }
    this.authService.getProfile(token).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  goToHistory(): void {
    this.router.navigate(['/history']);
  }
}
