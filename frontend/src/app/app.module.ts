import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    
    // ห้ามเพิ่มถ้าเป็น Standalone Components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginComponent,  //Standalone Component
    MenuComponent,  //Standalone Component
    BookingComponent,    //Standalone Component
    HistoryComponent,    //Standalone Component
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
