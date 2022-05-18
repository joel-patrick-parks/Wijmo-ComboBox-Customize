import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSetURL = 'https://mocki.io/v1/eaf8d0a8-052c-4d2a-b105-da40855634fa';

  constructor(private http: HttpClient) { }

  getDataSet() {
    return this.http.get(this.dataSetURL);
  }
}