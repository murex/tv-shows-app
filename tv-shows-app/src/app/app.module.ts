/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowCardComponent } from './shows-list/show-card/show-card.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowCastComponent } from './show-details/show-cast/show-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsListComponent,
    ShowCardComponent,
    ShowDetailsComponent,
    ShowCastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
