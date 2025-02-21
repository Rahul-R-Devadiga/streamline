import React from "react";

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="bg-gray-200 m-2 px-5 py-2 rounded-lg text-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
