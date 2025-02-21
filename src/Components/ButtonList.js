import React from "react";
import Button from "./Button";

const btnNameList = [
  "All",
  "JavaScript",
  "System Design",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
  "Gaming",
];

const ButtonList = () => {
  return (
    <div className="flex bg-black overflow-x-scroll row-span-1 ">
      {btnNameList.map((e, index) => (
        <Button name={e} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
