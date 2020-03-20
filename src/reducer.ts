import { GameState, Actions } from "./interface";

export const reducer = (state: GameState, action: Actions): GameState => {
  switch (action.type) {
    case "Select":
      return {
        ...state,
        selectPos: action.payload.pos
      };
    case "Move":
      const board = state.board.move(action.payload.from, action.payload.to);
      return {
        ...state,
        board: board,
        selectPos: undefined
      };
  }
};
