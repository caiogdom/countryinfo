import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryPageable } from '../models/historyPageable.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getHistory(): Observable<HistoryPageable> {
    return this.http.get<HistoryPageable>('http://localhost:8080/history');
  }
}
