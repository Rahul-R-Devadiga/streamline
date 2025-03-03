import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { findPrime } from "../Utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering...");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "border border-black m-4 p-2 w-96 h-96 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="rounded-lg px-2 bg-green-500 m-10"
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toogle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1 className="mt-4 font-bold text-xl">nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
