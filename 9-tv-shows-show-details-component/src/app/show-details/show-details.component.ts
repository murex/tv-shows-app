/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CastMember } from '../models/cast-member';
import { Show, ShowResponse } from '../models/show';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'tv-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {

  castMembers: CastMember[] = [];
  subscriptions: Subscription[] = [];

  show!: Show;

  constructor(private route: ActivatedRoute, private showService: ShowsService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.subscriptions.push(this.showService.getShow(id).subscribe(response => { this.show = response; console.log(response)}));
      this.subscriptions.push(this.showService.getCast(id).subscribe(response => this.castMembers = response));
    }
  }

  back(): void {
    this.router.navigate(['/shows']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( s => s.unsubscribe());
  }

}
