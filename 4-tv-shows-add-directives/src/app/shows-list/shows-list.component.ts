/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tv-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css'],
})
export class ShowsListComponent implements OnInit {

  searchString = "woman";
  shows: any[] = [
    {
      name: 'Wonder Woman',
      summary:
        "A colorful spin on Charles Moulton's comic about the Amazon goddess battling evil during World War II and later, in more recent times, against new enemies",
      genres: ['Action', 'Adventure', 'Science-Fiction'],
      img: 'https://static.tvmaze.com/uploads/images/medium_portrait/7/18638.jpg',
      rating: 6.3,
    },
    {
      name: 'The Pioneer Woman',
      summary:
        "The Pioneer Woman is an open invitation into Ree Drummond's life",
      genres: ['Food'],
      img: 'https://static.tvmaze.com/uploads/images/medium_portrait/228/571473.jpg',
      rating: 6.9,
    },
    {
      name: 'The Bionic Woman',
      summary: "She's no ordinary schoolteacher…she's The Bionic Woman",
      genres: ['Action', 'Adventure', 'Science-Fiction'],
      img: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2303.jpg',
      rating: 7.6,
    },
    {
      name: 'A Passionate Woman',
      summary:
        'Feeling trapped inside her conventional marriage, she abandons herself to a passion she never before dared believe possible',
      genres: ['Drama', 'Romance'],
      img: 'https://static.tvmaze.com/uploads/images/medium_portrait/27/68133.jpg',
      rating: 2,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSearchChanged() {
    console.log(`Search string has changed to ${this.searchString}`);
  }
}
