import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'booking/:serviceId', component: BookingComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
