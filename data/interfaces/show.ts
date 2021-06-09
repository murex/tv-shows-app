/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
export interface ShowResponse {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime?: number;
  premiered: string;
  officialSite?: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  dvdCountry?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Self;
  previousepisode: Self;
  nextepisode?: Self;
}

export interface Self {
  href: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Externals {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average?: number;
}

export interface Schedule {
  time: string;
  days: string[];
}
