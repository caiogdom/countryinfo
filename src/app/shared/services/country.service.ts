import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getByName(name: string): Observable<Country> {
    return this.http.get<Country>('http://localhost:8080/country/'+name);
  }
}
