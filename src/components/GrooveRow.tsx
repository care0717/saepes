import React from "react";
import { range } from "../utils/array";
import { HorizontalGroove } from "./Groove";
import { CrossSection } from "./CrossSection";

interface Props {
  size: number;
}

export const GrooveRow: React.FC<Props> = (props: Props) => {
  const addCrossSectionAndGroove = (
    acc: Array<React.ReactElement>,
    _: number
  ) => {
    acc.push(<CrossSection />);
    acc.push(<HorizontalGroove />);
    return acc;
  };
  return (
    <>
      <div>
        {range(1, props.size - 1).reduce(addCrossSectionAndGroove, [
          <HorizontalGroove />
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
