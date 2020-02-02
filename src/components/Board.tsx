import React from "react";
import { range } from "../utils/array";
import { CellRow } from "./CellRow";
import { GrooveRow } from "./GrooveRow";

interface Props {
  height: number;
  width: number;
}

export const Board: React.FC<Props> = (props: Props) => {
  const addRow = (acc: Array<React.ReactElement>, _: number) => {
    acc.push(<GrooveRow size={props.width} />);
    acc.push(<CellRow size={props.width} />);
    return acc;
  };
  return (
    <div>
      {range(0, props.height - 2).reduce(addRow, [
        <CellRow size={props.width} />
      ])}
    </div>
  );
};
