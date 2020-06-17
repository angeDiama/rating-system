import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'demo-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() starId: number;
  @Input() rating: number;

  @Output() hoverStar: EventEmitter<number> = new EventEmitter<number>()
  @Output() starLeave: EventEmitter<number> = new EventEmitter<number>()
  @Output() starClicked: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit() {
  }

  onStarHover() {
    this.hoverStar.emit(this.starId)
  }

  onStarLeave() {
    this.starLeave.emit()
  }

  onStarClicked() {
    this.starClicked.emit(this.starId)
  }



}
