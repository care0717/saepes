import React from "react";
import { Cell } from "./Cell";
import { range } from "../utils/array";

interface Props {
  size: number;
}

export const Row: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div>
        {range(0, props.size - 1).map(_ => (
          <Cell />
        ))}
      </div>
      <style jsx>{`
        clear: both;
        content: "";
        display: table;
      `}</style>
    </>
  );
};
