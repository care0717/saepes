import React from "react";
import { Board } from "./Board";
import { StoreProvider } from "../interface";
import { Store } from "./Store";

export const Game: React.FC = () => {
  const { state }: StoreProvider = React.useContext(Store);
  return (
    <>
      <body>
        <Board height={state.height} width={state.width} />
      </body>
      <style jsx>{`
        body {
          background-color: #282c34;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }
      `}</style>
    </>
  );
};
