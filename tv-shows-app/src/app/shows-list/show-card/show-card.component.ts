/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
******************************************************************************
*/
import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';

@Component({
  selector: 'tv-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input()
  show!: Show;

  constructor() { }

  ngOnInit(): void {
  }

}
