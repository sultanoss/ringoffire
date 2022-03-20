import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { tittle: 'drink', description: 'drink' },
    { tittle: 'drink', description: 'dance' },
    { tittle: 'drink', description: 'jump' },
    { tittle: 'drink', description: 'eat1' },
    { tittle: 'drink', description: 'eat2' },
    { tittle: 'drink', description: 'eat3' },
    { tittle: 'drink', description: 'eat4' },
    { tittle: 'drink', description: 'eat5' },
    { tittle: 'drink', description: 'eat6' },
    { tittle: 'drink', description: 'eat7' },
    { tittle: 'drink', description: 'eat8' },
    { tittle: 'drink', description: 'eat9' },
    { tittle: 'drink', description: 'eat10' },
  ];

  title = '';
  description = '';
  @Input() card: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.card) {
      let cardNummber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNummber - 1].tittle;
      this.description = this.cardAction[cardNummber - 1].description;
    }
  }
}
