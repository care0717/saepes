import React from "react";
import { range } from "../utils/array";
import { CellRow } from "./CellRow";
import { GrooveRow } from "./GrooveRow";

interface Props {
  height: number;
  width: number;
}

export const Board: React.FC<Props> = (props: Props) => {
  const addRow = (acc: Array<React.ReactElement>, i: number) => {
    acc.push(<GrooveRow size={props.width} />);
    acc.push(<CellRow row={i} size={props.width} />);
    return acc;
  };
  return (
    <div>
      {range(1, props.height - 1).reduce(addRow, [
        <CellRow row={0} size={props.width} />
      ])}
    </div>
  );
};
