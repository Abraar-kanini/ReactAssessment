import React from "react";

function Table(props) {

  return (
    <>
      <div
        className={`w-[95vw] h-[17vh] border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto
         ${
          props.bool ? 'hidden' : ""
        }  `}
      ></div>

      
    </>
  );
}

export default Table;
