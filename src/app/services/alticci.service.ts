import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlticciResponse } from '../dtos/AlticciResponse';

@Injectable({
  providedIn: 'root'
})
export class AlticciService {

  constructor(private http: HttpClient) { }

  getAlticciSequence(n: number) {
    return this.http.get<AlticciResponse>(`${environment.API}/alticci/${n}`);
  }
}
