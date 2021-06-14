/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Show, ShowResponse } from '../models/show';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'tv-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css'],
})
export class ShowsListComponent implements OnInit, OnDestroy {

  searchString = "woman";
  shows: ShowResponse[] = [];

  subscriptions: Subscription[] = [];


  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.subscriptions.push(this.loadShows());
  }

  onSearchChanged() {
    this.subscriptions.push(this.loadShows());
  }

  loadShows(): Subscription{
    return this.showsService.getShows(this.searchString).subscribe( response => this.shows = response);
  }

  ngOnDestroy(): void {
   this.subscriptions.forEach(s => s.unsubscribe());
  }
}
