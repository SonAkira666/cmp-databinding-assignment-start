import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventData: { counter: number, type: string }[] = [];

  testiamo(data): void {
    console.log(data);
    this.eventData.push(data);
  }
}
