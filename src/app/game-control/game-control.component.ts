import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: [
  ]
})
export class GameControlComponent implements OnInit {
  static instance: GameControlComponent;
  static timer;

  @Output() tick = new EventEmitter<{ counter: number, type: string }>();
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    GameControlComponent.instance = this;
  }

  startGame(): void {
    GameControlComponent.timer = setInterval(function() { GameControlComponent.instance.onTick(); } , 1000);
  }
  stopGame(): void {
    clearInterval(GameControlComponent.timer);
    // this.counter = 0;
  }
  onTick(): void {
    console.log(this.counter);
    this.counter += 1;
    let localType: string = this.counter % 2 === 0 ? 'even' : 'odd' ;
    this.tick.emit({ counter: this.counter, type: localType });
  }

}
