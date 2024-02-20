import React, { useContext } from "react";
import { UpdateContext } from "./Context";

function Table() {

  const value= useContext(UpdateContext);

  return (
    <>
      <div
        className={`w-[95vw] h-[17vh] border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto
         ${
          value.bool ? 'hidden' : ""
        }  `}
      ></div>

      
    </>
  );
}

export default Table;
