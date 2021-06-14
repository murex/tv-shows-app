/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, ShowResponse } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  searchShowsUrl = "http://api.tvmaze.com/search/shows?q=";

  constructor(private http: HttpClient) { }

  getShows(searchString: string): Observable<ShowResponse[]> {
    return this.http.get<ShowResponse[]>(this.searchShowsUrl + searchString);
  }
}
