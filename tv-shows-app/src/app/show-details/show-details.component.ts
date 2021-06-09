/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { Show } from '../models/show';
import { CastMember } from '../models/cast-member';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'tv-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {

  show!: Show;

  showCastTable = false;

  castMembers: CastMember[] = [];

  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private showsService: ShowsService, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.subscriptions.push(this.showsService.getShowDetails(id).subscribe( show => this.show = show));
      this.subscriptions.push(this.showsService.getShowCast(id).subscribe(castMembers => this.castMembers = castMembers));
    }
  }

  toggleShowCastTable(): void {
    this.showCastTable = !this.showCastTable;
  }

  onBack(): void {
    this.router.navigate(['/shows']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => subscription.unsubscribe());
  }

}
