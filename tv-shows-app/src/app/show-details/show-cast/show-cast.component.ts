/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
******************************************************************************
*/
import { Component, Input, OnInit } from '@angular/core';
import { CastMember } from 'src/app/models/cast-member';

@Component({
  selector: 'tv-show-cast',
  templateUrl: './show-cast.component.html',
  styleUrls: ['./show-cast.component.css']
})
export class ShowCastComponent implements OnInit {

  @Input()
  castMembers: CastMember[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
