/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'tv-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css'],
})
export class ShowsListComponent implements OnInit {

  searchString = "woman";
  shows: Show[] = [];


  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.shows = this.showsService.getShows();
  }

  onSearchChanged() {
    console.log(`Search string has changed to ${this.searchString}`);
  }
}
