import React from "react";

export const Cell: React.FC = () => {
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          background: #fff;
          border: 1px solid #999;
          float: left;
          font-size: 1vh;
          font-weight: bold;
          height: 7vh;
          padding: 0;
          text-align: center;
          width: 7vh;
        }
      `}</style>
    </>
  );
};
