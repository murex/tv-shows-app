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
