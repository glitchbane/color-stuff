import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-value-generator',
  templateUrl: './value-generator.component.html',
  styleUrls: ['./value-generator.component.css']
})
export class ValueGeneratorComponent implements OnInit {
  @Input() color: string;
  shades: string[] = [];
  constructor() { }

  ngOnInit() {
    console.log("valueColor: " + this.color);

    for (let x = 10; x >= 1; x--) {

      console.log(x/10);
      this.shades.push(this.shadeColor2(this.color, x/10));
    }
    this.shades.push(this.color);
    for (let x = -1; x >= -10; x--) {

      console.log(x/10);
      this.shades.push(this.shadeColor2(this.color, x/10));
    }
  }

  // from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
  shadeColor2(color, percent) {
    let f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;

    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }

}
