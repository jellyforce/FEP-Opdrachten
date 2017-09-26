import {Orientation} from  './Orientation';

export class Beeldscherm{

  width: number;
  height: number;

  constructor(w: number, h: number) {
    this.width = w;
    this.height = h;

  }

  getOrientation(): Orientation {
    if (this.width > this.height) {
      return Orientation.Landscape;
    }
    else {
      return Orientation.Portrait;
    }
  }
}


var b = new Beeldscherm(20, 30);
console.log(b.getOrientation());



