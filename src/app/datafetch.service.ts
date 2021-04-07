import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatafetchService {
  baseURL = 'http://localhost:3000';
  private readonly BASE_URL = environment.apiBaseUrl;
  private readonly FEB_URL = environment.apiFeb;
  private readonly MARCH_URL = environment.apiMarch;

  constructor(private router: Router, private http: HttpClient) { }
  fetchOrders = () => {
    return this.http.get(`${this.BASE_URL}/`);
  }

  fetchLineItems = () => {
    return this.http.get(`${this.BASE_URL}/lineitems`);
  }

  fetchFebOrders = () => {
    return this.http.get(`${this.BASE_URL}/feborders`);
  }
  fetchFeb = () => {
    return this.http.get(`${this.FEB_URL}/feb`);
  }
  fetchMarch = () => {
    return this.http.get(`${this.MARCH_URL}/shipping`);
  }
  fetchMarchLine = () => {
    return this.http.get(`${this.MARCH_URL}/lineitems`);
  }
}
