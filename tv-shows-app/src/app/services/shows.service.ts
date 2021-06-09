/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Show, ShowResponse } from '../models/show';
import { catchError, map, tap } from "rxjs/operators";
import { CastMember } from '../models/cast-member';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  searchShowsUrl = 'http://api.tvmaze.com/search/shows?q=';
  baseShowsUrl = 'https://api.tvmaze.com/shows';

  constructor(private http: HttpClient) {

  }

  getShows(searchString: string) : Observable<Show[]> {
    return this.http.get<ShowResponse[]>(this.searchShowsUrl + searchString).pipe(
      tap(response => console.log('Response', JSON.stringify(response))),
      catchError(error => this.handleError(error)),
      map(showResponse => showResponse.map(sr => sr.show))
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = err.message;
    console.error(`An error has occurred: ${errorMessage}`);
    return throwError(errorMessage);
  }

  getShowCast(id: string): Observable<CastMember[]> {
    return this.http.get<CastMember[]>(`${this.baseShowsUrl}/${id}/cast`);
  }

  getShowDetails(id: string): Observable<Show> {
    return this.http.get<Show>(`${this.baseShowsUrl}/${id}`);
  }
}
