import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/Models/Game';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.css']
})
export class GameTabsComponent implements OnInit {

  constructor() { }
  @Input() game!: Game;
  ngOnInit(): void {
  }

}
