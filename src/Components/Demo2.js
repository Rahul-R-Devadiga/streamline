import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 10;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  return (
    <div className="m-4 p-2 w-96 h-96 bg-gray-400 border border-black">
      <div>
        <button
          className="border border-black bg-green-400 rounded-lg m-2 px-2"
          onClick={() => {
            x += 1;
            console.log("x =", x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">let {x}</span>
      </div>

      <div>
        <button
          className="border border-black bg-green-400 rounded-lg m-2 px-2"
          onClick={() => {
            setY(y + 1);
            console.log("y =", y);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">state {y}</span>
      </div>

      <div>
        <button
          className="border border-black bg-green-400 rounded-lg m-2 px-2"
          onClick={() => {
            ref.current += 1;
            console.log("ref =", ref.current);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">ref {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
