/*******************************************************************************
* Copyright (c) {2003-2021} Murex S.A.S. and its affiliates.
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the MIT License
* which accompanies this distribution, and is available at
* https://opensource.org/licenses/MIT
*******************************************************************************/
export interface CastMember {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Self {
  href: string;
}

export interface Links {
  self: Self;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday?: any;
  gender: string;
  image: Image;
  _links: Links;
}

export interface Image2 {
  medium: string;
  original: string;
}

export interface Self2 {
  href: string;
}

export interface Links2 {
  self: Self2;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image2;
  _links: Links2;
}
