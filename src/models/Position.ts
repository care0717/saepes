export class Position {
  x: number;
  y: number;
  constructor(y: number, x: number) {
    this.x = x;
    this.y = y;
  }

  equal(pos: Position): Boolean {
    return this.x === pos.x && this.y === pos.y;
  }
}
