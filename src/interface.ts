import React from "react";
import { BoardModel } from "./models/BoardModel";
import { Position } from "./models/Position";

export interface GameState {
  height: number;
  width: number;
  board: BoardModel;
  selectPos?: Position;
}

interface SelectAction {
  type: "Select";
  payload: {
    pos: Position;
  };
}

interface MoveAction {
  type: "Move";
  payload: {
    from: Position;
    to: Position;
  };
}
export type Actions = SelectAction | MoveAction;

export interface StoreProvider {
  state: GameState;
  dispatch: React.Dispatch<Actions>;
}
