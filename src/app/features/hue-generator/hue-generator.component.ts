import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hue-generator',
  templateUrl: './hue-generator.component.html',
  styleUrls: ['./hue-generator.component.css']
})
export class HueGeneratorComponent implements OnInit {

  hueGroups: string[][] = [];
  constructor() { }

  ngOnInit() {
    let hues: string[] = [],
        r: number,
        g: number,
        b: number,
        increment: number;
    
    increment = 8;

    // generate hues with red 100% and green in increments of increment up to 255
    r = 100;
    b = 0;
    for(g= 0; g <= 255; g += increment) {
      hues.push(this.convertRgbToHex(r, g, b));
    }
    this.hueGroups.push(hues);

    hues = [];
    r = 100;
    g = 0;
    // generate hues with red 100% and blue in increments
    for(b = 0; b <= 255; b += increment) {
      hues.push(this.convertRgbToHex(r, g, b));
    }
    this.hueGroups.push(hues);

    hues = [];
    g = 100;
    b = 0;
    // generate hues with green 100% and red in increments
    for(r= 0; r <= 255; r += increment) {
      hues.push(this.convertRgbToHex(r, g, b));
    }
    this.hueGroups.push(hues);

    hues = [];
    r = 0;
    g = 100;
    // generate hues with green 100% and blue in increments
    for(b = 0; b <= 255; b += increment) {
      hues.push(this.convertRgbToHex(r, g, b));
    }
    this.hueGroups.push(hues);

    hues = [];
    g = 0;
    b = 100;
    // generate hues with blue 100% and red in increments
    for(r= 0; r <= 255; r += increment) {
      hues.push(this.convertRgbToHex(r, g, b));
    }
    this.hueGroups.push(hues);

    // generate hues with blue 100% and green in increments
    hues = [];
    r = 0;
    b = 100;
    for(g= 0; g <= 255; g += increment) {
      hues.push(this.convertRgbToHex(r, g, b));
    }
    this.hueGroups.push(hues);
  }


 componentToHex(color: number): string {
  var hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

  convertRgbToHex (red, green, blue): string {
    return "#" + this.componentToHex(red)
        + this.componentToHex(green)
        + this.componentToHex(blue);
  }
}
