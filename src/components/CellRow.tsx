import React from "react";
import { Cell } from "./Cell";
import { range } from "../utils/array";
import { VerticalGroove } from "./Groove";

interface Props {
  size: number;
}

export const CellRow: React.FC<Props> = (props: Props) => {
  const addGrooveAndCell = (acc: Array<React.ReactElement>, _: number) => {
    acc.push(<VerticalGroove />);
    acc.push(<Cell />);
    return acc;
  };
  return (
    <>
      <div>{range(0, props.size - 1).reduce(addGrooveAndCell, [<Cell />])}</div>
      <style jsx>{`
        clear: both;
        content: "";
        display: table;
      `}</style>
    </>
  );
};
