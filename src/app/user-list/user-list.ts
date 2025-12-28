import { Component } from '@angular/core';
import { User } from '../model/prayer.model';
import { PrayerService } from '../services/prayerservice';
import { Usercard } from '../usercard/usercard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-list',
  imports: [Usercard, CommonModule],
  providers: [PrayerService],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService: PrayerService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}