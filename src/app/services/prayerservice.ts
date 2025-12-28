import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Prayer, User } from '../model/prayer.model';
import {USERS, PRAYERS} from '../data/prayers.data';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  private readonly userDataUrl = USERS;
  private readonly prayerDataUrl = PRAYERS;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
  getPrayers(): Observable<Prayer[]> {
    return of(PRAYERS);
  }
}
