import React from "react";
import css from "styled-jsx/css";

const grooveStyle = css`
  div {
    background: #d3d3d3;
    float: left;
    margin: 0;
    padding: 0;
  }
`;

export const HorizontalGroove: React.FC = () => {
  return (
    <>
      <div></div>
      <style jsx>{grooveStyle}</style>
      <style jsx>{`
        div {
          height: 1.2vh;
          width: 7vh;
        }
      `}</style>
    </>
  );
};

export const VerticalGroove: React.FC = () => {
  return (
    <>
      <div></div>
      <style jsx>{grooveStyle}</style>
      <style jsx>{`
        div {
          height: 7vh;
          width: 1.2vh;
        }
      `}</style>
    </>
  );
};
