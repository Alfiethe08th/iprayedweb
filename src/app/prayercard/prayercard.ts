import { Component, Input } from '@angular/core';
import { Prayer, User } from '../model/prayer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prayercard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prayercard.html',
  styleUrls: ['./prayercard.css']
})
export class PrayerCardComponent {
  @Input() prayer!: Prayer;
}
