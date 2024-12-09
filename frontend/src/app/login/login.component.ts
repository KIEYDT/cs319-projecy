import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  // private adminEmail = '123@123.com'; //email
  // private adminPassword = '123'; //password
  email: string = "";
  password: string = "";
  token: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(
      (response: any) => {
        this.token = response.token;
        this.router.navigate(['/menu']);
        console.log("token ", this.token);
      },
      (error) => {
        console.log("error ", error);
      }
    );
  }
}
