import { Component, signal } from '@angular/core';
import { PrayerListComponent } from './prayer-list/prayer-list';
import { UserListComponent } from './user-list/user-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PrayerListComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('iprayedweb');
}
