import React from "react";
import "../App.css";
import { range } from "../utils/array";
import { Row } from "./Row";

interface Props {
  height: number;
  width: number;
}

export const Board: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {range(0, props.height - 1).map(_ => (
        <Row size={props.width} />
      ))}
    </div>
  );
};
