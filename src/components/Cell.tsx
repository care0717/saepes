import React from "react";
import { StoreProvider } from "../interface";
import { Store } from "./Store";
import { Piece } from "./Piece";
import { Position } from "../models/Position";
import { Status } from "../models/BoardModel";

interface Props {
  pos: Position;
}

export const Cell: React.FC<Props> = ({ pos }) => {
  const { state, dispatch }: StoreProvider = React.useContext(Store);
  const handleClick = (pos: Position) => {
    if (state.board.isEmpty(pos)) {
      if (state.selectPos != null) {
        dispatch({
          type: "Move",
          payload: {
            from: state.selectPos!,
            to: pos
          }
        });
      }
    } else {
      dispatch({
        type: "Select",
        payload: {
          pos: pos
        }
      });
    }
  };

  const color = state.selectPos?.equal(pos) ? "#eee" : "#fff";
  return (
    <>
      <div onClick={() => handleClick(pos)}>
        {state.board.isEmpty(pos) ? null : (
          <Piece status={state.board.getStatus(pos)} />
        )}
      </div>
      <style jsx>{`
        div {
          background: #fff;
          background: ${color};
          float: left;
          font-size: 1vh;
          font-weight: bold;
          height: 7vmin;
          padding: 0;
          text-align: center;
          width: 7vmin;
        }
      `}</style>
    </>
  );
};
