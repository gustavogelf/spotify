import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;

  constructor(public http: HttpClient) {
    this.url = '/api/albums';
  }

  searchAlbums(query): Observable<{}> {
    let params = new HttpParams();
    params = params.append('q', query);
    return this.http.get(this.url, {params});
  }
}
