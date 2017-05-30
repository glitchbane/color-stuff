import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-hue-group',
  templateUrl: './hue-group.component.html',
  styleUrls: ['./hue-group.component.css']
})
export class HueGroupComponent implements OnInit {
  @Input() groupHues : string[];
  constructor() { }

  ngOnInit() {
  }

}
