import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Leader } from '../shared/leader';

@Injectable()
export class LeaderService {

  constructor( @Inject('BaseURL') private baseURL: string, private http: HttpClient) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(this.baseURL + 'leaders');
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(this.baseURL + 'leaders/' + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(this.baseURL + 'leaders?featured=true').map(response => response[0]);
  }
}
