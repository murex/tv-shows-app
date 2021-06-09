/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Show } from '../models/show';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'tv-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit, OnDestroy {

  searchString = 'woman';
  shows: Show[] = [];
  subscription: Subscription[] = [];

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.subscription.push(this.loadShows(this.searchString));
  }

  onSearchChanged() {
    this.subscription.push(this.loadShows(this.searchString));
  }

  loadShows(searchString: string) {
    return this.showsService.getShows(this.searchString).subscribe({
      next: shows => this.shows = shows,
      error: err => console.log()
    })
  }

  ngOnDestroy(): void {
    this.subscription.forEach( s => s.unsubscribe());
  }

}
