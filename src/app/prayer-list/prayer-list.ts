import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../services/prayerservice';
import { Prayer } from '../model/prayer.model';
import { PrayerCardComponent } from '../prayercard/prayercard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prayer-list',
  standalone: true,
  imports: [PrayerCardComponent, CommonModule],
  providers: [PrayerService],
  templateUrl: './prayer-list.html',
  styleUrls: ['./prayer-list.css']
})
export class PrayerListComponent implements OnInit {

  prayers: Prayer[] = [];

  constructor(private prayerService: PrayerService) {}

  ngOnInit(): void {
    this.loadPrayers();
  }

  private loadPrayers(): void {
    this.prayerService.getPrayers().subscribe(data => {
      this.prayers = data;
    });
  }
}
