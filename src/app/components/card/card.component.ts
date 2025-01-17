import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""

  constructor() {}

}
