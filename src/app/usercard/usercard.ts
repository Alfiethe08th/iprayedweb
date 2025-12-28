import { Component, Input } from '@angular/core';
import { User } from '../model/prayer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'usercard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercard.html',
  styleUrl: './usercard.css',
})
export class Usercard {
  @Input() user!: User;
}
