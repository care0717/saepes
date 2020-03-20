import { Position } from "./Position";

export enum Status {
  Enemy,
  Empty,
  Mine
}

export class BoardModel {
  board: Array<Array<Status>>;
  constructor(height: number, width: number) {
    this.board = new Array(height)
      .fill(0)
      .map(_ => Array(width).fill(Status.Empty));
    const center = Math.floor(width / 2);
    this.board[0][center] = Status.Enemy;
    this.board[height - 1][center] = Status.Mine;
  }

  move(from: Position, to: Position): BoardModel {
    const status = this.board[from.y][from.x];
    this.board[from.y][from.x] = Status.Empty;
    this.board[to.y][to.x] = status;
    return this;
  }
  isMine(p: Position) {
    return this.board[p.y][p.x] === Status.Mine;
  }

  isEmpty(p: Position) {
    return this.board[p.y][p.x] === Status.Empty;
  }

  getStatus(p: Position): Status {
    return this.board[p.y][p.x];
  }
}
