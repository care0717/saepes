import * as React from "react";
import { GameState } from "../interface";
import { reducer } from "../reducer";
import { BoardModel } from "../models/BoardModel";

const height = 9;
const width = 9;
const initialState: GameState = {
  height: height,
  width: width,
  board: new BoardModel(height, width)
};

export const Store = React.createContext<GameState | any>(initialState);

export const StoreProviderImpl: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
