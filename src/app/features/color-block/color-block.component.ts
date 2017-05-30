import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.css']
})
export class ColorBlockComponent implements OnInit {
  @Input() startColor: string;
  @Input() colorLabel: string;
  constructor() { }

  ngOnInit() {

  }

  getColor() {
    return this.startColor;
  }
}
