import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  stars: number[] = [1, 2, 3, 4, 5];
  rating = 1;
  hoverStar = 0;

  onHover(id: number) {
    this.hoverStar = id;
  }

  onLeave() {
    this.hoverStar = 0;
  }

  onClicked(id: number) {
    this.rating = id;
  }
}
