import React from "react";
import { Status } from "../models/BoardModel";

interface Props {
  status: Status;
}

export const Piece: React.FC<Props> = ({ status }) => {
  return status === Status.Mine ? MinePiece : EnemyPiece;
};

const MinePiece = (
  <>
    <div></div>
    <style jsx>{`
      div {
        background: #ddd;
        border: 1px solid #999;
        float: left;
        font-weight: bold;
        height: 2vmin;
        padding: 0;
        text-align: center;
        width: 2vmin;
      }
    `}</style>
  </>
);

const EnemyPiece = (
  <>
    <div></div>
    <style jsx>{`
      div {
        background: #000;
        border: 1px solid #999;
        float: left;
        font-size: 1vh;
        font-weight: bold;
        height: 2vh;
        padding: 0;
        text-align: center;
        width: 2vh;
      }
    `}</style>
  </>
);
