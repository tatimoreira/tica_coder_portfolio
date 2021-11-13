import React from "react";

export const Dropdown = () => {
  return (
    <>
      <form className="flex flex-col">
        <select
          className="border-2 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-colorPop2"
          name="selectList"
          id="selectList"
        >
            <option value="option 1">Option 1</option> {" "}
          <option value="option 2">Option 2</option>
        </select>
      </form>
    </>
  );
};
