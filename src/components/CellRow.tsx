import React from "react";
import { Cell } from "./Cell";
import { range } from "../utils/array";
import { VerticalGroove } from "./Groove";
import { Position } from "../models/Position";

interface Props {
  row: number;
  size: number;
}

export const CellRow: React.FC<Props> = (props: Props) => {
  const addGrooveAndCell = (acc: Array<React.ReactElement>, j: number) => {
    acc.push(<VerticalGroove />);
    acc.push(<Cell pos={new Position(props.row, j)} />);
    return acc;
  };
  return (
    <>
      <div>
        {range(1, props.size - 1).reduce(addGrooveAndCell, [
          <Cell pos={new Position(props.row, 0)} />
        ])}
      </div>
      <style jsx>{`
        div {
          clear: both;
          content: "";
          display: table;
        }
      `}</style>
    </>
  );
};
